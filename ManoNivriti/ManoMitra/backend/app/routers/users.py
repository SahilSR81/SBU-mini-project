from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db
from ..utils import get_password_hash, verify_password, create_access_token
from pydantic import EmailStr, constr
from typing import Optional
from datetime import date

router = APIRouter()

class UserCreateWithValidation(schemas.UserCreate):
    email: EmailStr
    password: constr(min_length=8, max_length=50)
    name: constr(min_length=1, max_length=50)
    gender: constr(regex='^(male|female|other)$')
    date_of_birth: date
    occupation: Optional[constr(max_length=100)] = None
    interests: Optional[constr(max_length=200)] = None
    preferred_language: constr(regex='^(en|hi)$')

@router.post("/users/", response_model=schemas.User)
def create_user(user: UserCreateWithValidation, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = get_password_hash(user.password)
    db_user = models.User(**user.dict(exclude={"password"}), hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@router.post("/token")
def login(email: EmailStr, password: str, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

