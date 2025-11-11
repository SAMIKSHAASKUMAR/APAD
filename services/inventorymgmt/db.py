'''import os
from pathlib import Path
from dotenv import load_dotenv
from pymongo import MongoClient
import certifi

# inside container we are at /app
ROOT_DIR = Path(__file__).resolve().parents[1]
ENV_PATH = ROOT_DIR / ".env"
load_dotenv(ENV_PATH)

MONGO_URI = os.getenv("MONGO_URI")
if not MONGO_URI:
    raise RuntimeError(f"MONGO_URI not set in .env (looked at {ENV_PATH})")

client = MongoClient(MONGO_URI, tlsCAFile=certifi.where())'''

import os
from pymongo import MongoClient
import certifi

# We trust that Docker will give us the variable.
MONGO_URI = os.getenv("MONGO_URI")

if not MONGO_URI:
    # This error is now 100% accurate
    raise RuntimeError("MONGO_URI was not set in the container's environment.")

# This line uses the MONGO_URI to connect
client = MongoClient(MONGO_URI, tlsCAFile=certifi.where())

def get_db(name: str):
    # This function returns the database
    return client[name]

def get_db(name: str):
    return client[name]
