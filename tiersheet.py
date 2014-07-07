from flask import Flask, request, session, g, redirect, url_for, \
    abort, render_template, flash, jsonify
from flask.ext.sqlalchemy import SQLAlchemy
import os

basedir = os.path.abspath(os.path.dirname(__file__))

CSRF_ENABLED = True
DEBUG = True
DATABASE = 'player.db'
SECRET_KEY = os.environ["FLASK_SECRET_KEY"]
DATABASE_PATH = os.path.join(basedir, DATABASE)

SQLALCHEMY_DATABASE_URI = 'sqlite:///' + DATABASE_PATH

app = Flask(__name__, static_url_path='')
app.config.from_object(__name__)
db = SQLAlchemy(app)

import models

@app.route('/')
def index():
    players = db.session.query(models.Player)
    return render_template('index.html', players=players)

@app.route('/sort/<int:player_id>', methods=['GET'])
def sort_order(player_id):
    """Resorts player order"""
    result = { 'status':0, 'message': 'Error' }
    try:
        new_id = player_id
        db.session.query(models.Player).filter_by(player_id=new_id)
        db.session.commit()
        result = {'status':1, 'message': "Player reordered" }
    except Exception as e:
        result = { 'status':0, 'message': repr(e) }
    return jsonify(result)

if __name__ == '__main__':
    app.run(
    host = '0.0.0.0'
    )
