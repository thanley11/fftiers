from flask import Flask, request, session, redirect, render_template, jsonify
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

@app.route('/sort/', methods=['POST'])
def sort_order():
    """Resorts player order"""
    result = {'status':0, 'message': 'Error'}
    try:
        pid = request.args.get('pid')
        result = {'status':1, 'message': str(pid) }
    except Exception as e:
        result = { 'status':0, 'message': repr(e) }
    return jsonify(result)

@app.template_filter('QB')
def qb_filter(s):
    try:
        s = models.Player.query.filter_by(position="QB")
        return s
    except Exception as e:
        return repr(e)

@app.template_filter('RB')
def rb_filter(s):
    try:
        s = models.Player.query.filter_by(position="RB")
        return s
    except Exception as e:
        return repr(e)

@app.template_filter('WR')
def wr_filter(s):
    try:
        s = models.Player.query.filter_by(position="WR")
        return s
    except Exception as e:
        return repr(e)

@app.template_filter('TE')
def te_filter(s):
    try:
        s = models.Player.query.filter_by(position="TE")
        return s
    except Exception as e:
        return repr(e)

@app.template_filter('DEF')
def def_filter(s):
    try:
        s = models.Player.query.filter_by(position="DEF")
        return s
    except Exception as e:
        return repr(e)

@app.template_filter('K')
def k_filter(s):
    try:
        s = models.Player.query.filter_by(position="K")
        return s
    except Exception as e:
        return repr(e)


if __name__ == '__main__':
    app.run(
    host = '0.0.0.0'
    )
