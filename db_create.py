# db_create.py

from tiersheet import db
from models import Player

db.create_all()

db.session.commit()
