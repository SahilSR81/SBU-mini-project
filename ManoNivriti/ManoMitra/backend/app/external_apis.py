import requests
from fastapi import HTTPException

ZYLA_API_KEY = "your_zyla_api_key"
YOGA_API_KEY = "your_yoga_api_key"
CALM_API_KEY = "your_calm_api_key"
PIXABAY_API_KEY = "your_pixabay_api_key"

def get_motivational_quote():
    url = f"https://api.zyla.com/quotes?apikey={ZYLA_API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data['quote']
    else:
        raise HTTPException(status_code=500, detail="Failed to fetch motivational quote")

def get_yoga_pose():
    url = f"https://api.yoga.com/poses?apikey={YOGA_API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data['pose']
    else:
        raise HTTPException(status_code=500, detail="Failed to fetch yoga pose")

def get_meditation_session():
    url = f"https://api.calm.com/meditations?apikey={CALM_API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data['meditation']
    else:
        raise HTTPException(status_code=500, detail="Failed to fetch meditation session")

def get_stress_relief_music():
    url = f"https://pixabay.com/api/?key={PIXABAY_API_KEY}&q=relaxing+music&media_type=audio"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data['hits'][0]['audio'] if data['hits'] else None
    else:
        raise HTTPException(status_code=500, detail="Failed to fetch stress relief music")

def get_stress_relief_game():
    # This is a mock function as there's no specific API for Prune game
    # In a real-world scenario, you might have your own database of games or integrate with a game API
    return {
        "name": "Prune",
        "description": "A game about the beauty and joy of cultivation",
        "link": "https://play.google.com/store/apps/details?id=com.Polyculture.Prune"
    }

