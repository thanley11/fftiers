from tiersheet import db

class Player(db.Model):

    __tablename__ = "player"

    player_id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(64), unique = True)

# Differs
    def __repr__(self):
        return '<Player %r>' % (self.name)


