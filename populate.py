#from sqlalchemy import create_engine
#from sqlalchemy.orm import sessionmaker

#player_engine = create_engine('sqlite:/// )

#Session = sessionmaker(bind=player_engine)

#session = Session()
#Need to add url for player and bye

def populate():
    player_1 = add_player('Tom Brady','QB')
    player_2 = add_player('Peyton Manning','QB')
    player_3 = add_player('Lesean McCoy','RB')
    player_4 = add_player('Calvin Johnson','WR')
    player_5 = add_player('Jimmy Graham','TE')
    player_6 = add_player('Seattle','DEF')


def add_player(name,position):
    c = Player(name=name,position=position)
    db.session.add(c)
    db.session.commit()

if __name__== '__main__':
    print "Starting populate script"
    from tiersheet import db
    from models import Player
    populate()
