# services/projectmgmt/db.py
import os
from pathlib import Path

from dotenv import load_dotenv
from pymongo import MongoClient
import certifi

# 1) try: running from source (your VS Code layout)
this_file = Path(__file__).resolve()

# default: look 2 levels up (source layout: shecodes-microservices/.env)
possible_root = this_file.parents[2] if len(this_file.parents) >= 3 else this_file.parent

env_path = possible_root / ".env"

# 2) if that doesn't exist (Docker case: /app/.env), fall back
if not env_path.exists():
    env_path = Path("/app/.env")

# load it
load_dotenv(dotenv_path=env_path)

MONGO_URI = os.getenv("MONGO_URI")
if not MONGO_URI:
    raise RuntimeError(f"MONGO_URI not set in .env (looked at {env_path})")

client = MongoClient(MONGO_URI, tlsCAFile=certifi.where())


def get_projects_collection():
    db = client["Projects"]
    return db["Projects"]
