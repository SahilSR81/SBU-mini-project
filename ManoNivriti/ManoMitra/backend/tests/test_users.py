from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database import Base
from app.main import app
from app.database import get_db
import pytest

SQLALCHEMY_DATABASE_URL = "mysql://testuser:testpassword@localhost/test_manomitra"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope="module")
def test_app():
    Base.metadata.create_all(bind=engine)
    yield
    Base.metadata.drop_all(bind=engine)

@pytest.fixture(scope="module")
def test_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)

def test_create_user(test_app, test_db):
    response = client.post(
        "/users/",
        json={
            "email": "test@example.com",
            "password": "testpassword",
            "name": "Test User",
            "gender": "male",
            "date_of_birth": "1990-01-01",
            "occupation": "Tester",
            "interests": "Testing",
            "preferred_language": "en"
        },
    )
    assert response.status_code == 200, response.text
    data = response.json()
    assert data["email"] == "test@example.com"
    assert "id" in data

def test_create_user_invalid_email(test_app, test_db):
    response = client.post(
        "/users/",
        json={
            "email": "notanemail",
            "password": "testpassword",
            "name": "Test User",
            "gender": "male",
            "date_of_birth": "1990-01-01",
            "occupation": "Tester",
            "interests": "Testing",
            "preferred_language": "en"
        },
    )
    assert response.status_code == 422

def test_login(test_app, test_db):
    # First, create a user
    client.post(
        "/users/",
        json={
            "email": "login@example.com",
            "password": "testpassword",
            "name": "Login User",
            "gender": "female",
            "date_of_birth": "1995-01-01",
            "occupation": "Tester",
            "interests": "Testing",
            "preferred_language": "en"
        },
    )

    # Now, try to login
    response = client.post("/token", data={"username": "login@example.com", "password": "testpassword"})
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"

def test_login_invalid_credentials(test_app, test_db):
    response = client.post("/token", data={"username": "wrong@example.com", "password": "wrongpassword"})
    assert response.status_code == 401

