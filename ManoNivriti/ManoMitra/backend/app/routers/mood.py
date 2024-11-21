from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db
from ..utils import get_current_user

router = APIRouter()

@router.post("/moods/", response_model=schemas.Mood)
def create_mood(mood: schemas.MoodCreate, db: Session = Depends(get_db), current_user: schemas.User = Depends(get_current_user)):
    db_mood = models.Mood(**mood.dict(), user_id=current_user.id)
    db.add(db_mood)
    db.commit()
    db.refresh(db_mood)
    return db_mood

@router.get("/moods/", response_model=list[schemas.Mood])
def read_moods(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: schemas.User = Depends(get_current_user)):
    moods = db.query(models.Mood).filter(models.Mood.user_id == current_user.id).offset(skip).limit(limit).all()
    return moods

