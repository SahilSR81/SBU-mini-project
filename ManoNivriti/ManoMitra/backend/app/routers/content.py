from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db
from ..external_apis import (
    get_motivational_quote,
    get_yoga_pose,
    get_meditation_session,
    get_stress_relief_music,
    get_stress_relief_game
)

router = APIRouter()

@router.get("/content/quote")
def read_quote():
    return {"quote": get_motivational_quote()}

@router.get("/content/yoga")
def read_yoga_pose():
    return {"yoga_pose": get_yoga_pose()}

@router.get("/content/meditation")
def read_meditation():
    return {"meditation": get_meditation_session()}

@router.get("/content/music")
def read_music():
    return {"music": get_stress_relief_music()}

@router.get("/content/game")
def read_game():
    return {"game": get_stress_relief_game()}

