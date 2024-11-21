from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float, Text
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))
    name = Column(String(255))
    gender = Column(String(10))
    date_of_birth = Column(DateTime)
    occupation = Column(String(255))
    interests = Column(Text)
    preferred_language = Column(String(10))

    moods = relationship("Mood", back_populates="user")

class Mood(Base):
    __tablename__ = "moods"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    date = Column(DateTime)
    mood_level = Column(Integer)
    physical_health = Column(Integer)
    exercise_status = Column(Integer)
    eating_habits = Column(Integer)
    sleep_quality = Column(Integer)
    event_impact = Column(Text)

    user = relationship("User", back_populates="moods")

class Activity(Base):
    __tablename__ = "activities"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255))
    description = Column(Text)
    duration = Column(Float)
    category = Column(String(255))

class Content(Base):
    __tablename__ = "contents"

    id = Column(Integer, primary_key=True, index=True)
    type = Column(String(50))
    title = Column(String(255))
    content = Column(Text)
    author = Column(String(255))
    duration = Column(Float)

