# services/usermgmt/db.py
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

def get_users_collection():
    db = client["Users"]
    return db["Users"]
