from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

player_engine = create_engine('sqlite:/// )

Session = sessionmaker(bind=player_engine)

session = Session()


def populate():
    player = add_player('Tom')

def add_player(name):
    c = Player.add(name=name)
    return c

if __name__== '__main__':
    print "Starting populate script"
    from models import Player
    populate()
