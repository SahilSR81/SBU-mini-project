from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class UserBase(BaseModel):
    email: str
    name: str
    gender: str
    date_of_birth: datetime
    occupation: str
    interests: str
    preferred_language: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True

class MoodBase(BaseModel):
    date: datetime
    mood_level: int
    physical_health: int
    exercise_status: int
    eating_habits: int
    sleep_quality: int
    event_impact: Optional[str] = None

class MoodCreate(MoodBase):
    pass

class Mood(MoodBase):
    id: int
    user_id: int

    class Config:
        orm_mode = True

class ActivityBase(BaseModel):
    name: str
    description: str
    duration: float
    category: str

class ActivityCreate(ActivityBase):
    pass

class Activity(ActivityBase):
    id: int

    class Config:
        orm_mode = True

class ContentBase(BaseModel):
    type: str
    title: str
    content: str
    author: Optional[str] = None
    duration: Optional[float] = None

class ContentCreate(ContentBase):
    pass

class Content(ContentBase):
    id: int

    class Config:
        orm_mode = True

