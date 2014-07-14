#from sqlalchemy import create_engine
#from sqlalchemy.orm import sessionmaker

#player_engine = create_engine('sqlite:/// )

#Session = sessionmaker(bind=player_engine)

#session = Session()
#Need to add url for player and bye

def populate():
    player_1 = add_player('Tom Brady','QB',8,'http://www.espn.com')
    player_2 = add_player('Peyton Manning','QB',3,'http://www.espn.com')
    player_3 = add_player('Lesean McCoy','RB',8,'http://www.espn.com')
    player_4 = add_player('Calvin Johnson','WR',8,'http://www.espn.com')
    player_5 = add_player('Jimmy Graham','TE',8,'http://www.espn.com')
    player_6 = add_player('Jamaal Charles','RB',8,'http://www.espn.com')
    player_7 = add_player('Dez Bryant','WR',3,'http://www.espn.com')
    player_8 = add_player('Julius Thomas','TE',2,'http://www.espn.com')
    player_9 = add_player('Denver','DEF',3,'http://www.espn.com')
    player_10 = add_player('Seattle','DEF',4,'http://www.espn.com')


def add_player(name,position,bye,url):
    c = Player(name=name,position=position,bye=bye,url=url)
    db.session.add(c)
    db.session.commit()

if __name__== '__main__':
    print "Starting populate script"
    from tiersheet import db
    from models import Player
    populate()
