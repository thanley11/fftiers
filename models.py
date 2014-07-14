from tiersheet import db


class Player(db.Model):

    __tablename__ = "player"

    player_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    position = db.Column(db.Enum('QB', 'RB', 'WR', 'TE', 'DEF', 'K', name='player_position'))
    bye = db.Column(db.Integer)
    url = db.Column(db.String(64))

    def __init__(self, name, position, bye, url):
        self.name     = name
        self.position = position
        self.bye      = bye
        self.url      = url

    def __repr__(self):
        return '<Player %r>' % (self.name)
