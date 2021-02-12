var mvp_list = [
	['Giannis Antetokounmpo', 'Milwaukee', 'Bucks', 'Power Forward', '2019'], //0
	['Giannis Antetokounmpo', 'Milwaukee', 'Bucks', 'Power Forward', '2018'], //1
	['James Harden', 'Houston', 'Rockets', 'Shooting Guard', '2017'],		//2
	['Russell Westbrook', 'Oklahoma City', 'Thunder', 'Point Guard', '2016'],		//3
	['Stephen Curry', 'Golden State', 'Warriors', 'Point Guard', '2015'],		//4
	['Stephen Curry', 'Golden State', 'Warriors', 'Point Guard', '2014'],		//5
	['Kevin Durant', 'Oklahoma City', 'Thunder', 'Small Forward', '2013'],		//6
	['Lebron James', 'Miami', 'Heat', 'Small Forward', '2012'],		//7
	['Lebron James', 'Miami', 'Heat', 'Small Forward', '2011'],		//8
	['Derrick Rose', 'Chicago', 'Bulls', 'Point Guard', '2010'],		//9
	['Lebron James', 'Cleveland', 'Cavaliers', 'Small Forward', '2009'], //10
	['Lebron James', 'Cleveland', 'Cavaliers', 'Small Forward', '2008'],	//11
	['Kobe Bryant', 'Los Angeles', 'Lakers', 'Shooting Guard', '2007'],
	['Dirk Nowitzki', 'Dallas', 'Mavericks', 'Power Forward', '2006'],
	['Steve Nash', 'Phoenix', 'Suns', 'Point Guard', '2005'],
	['Steve Nash', 'Phoenix', 'Suns', 'Point Guard', '2004'],
	['Kevin Garnett', 'Minnesota', 'Timberwolves', 'Power Foward', '2003'],
	['Tim Duncan', 'San Antonio', 'Spurs', 'Power Forward', '2002'],
	['Tim Duncan', 'San Antonio', 'Spurs', 'Power Forward', '2001'],
	['Allen Iverson', 'Philadelphia', '76ers', 'Shooting Guard', '2000'],
	['Shaquille O\'Neal', 'Los Angeles', 'Lakers', 'Center', '1999']
]

function searchName(search) {
	results = ''
	for (season of mvp_list) {
		if (season.includes(search)) {
			results += season
		}
	}
	return results
}
