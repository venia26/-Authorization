
function store (data){
	var mysql = require('mysql');
	var status = {};
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'dankul',
		password : 'Kbbsrvrd12',
		database : 'dankul'
	});
	
	connection.connect();
	
	var query = connection.query('INSERT INTO users SET ?', data);
	
		query.on('error', function(err) {
			try {
				throw err;
			}
			catch (e) {
				console.log(e.code);
				status.insert = e.code;
				
				return {insert: e.code};
			}
		});	

		query.on('result', function(row) {
			status.insert = row.post_title;
		});
	
	connection.end();
	
	return {insert: "ok"};
	
	 
};

module.exports = store;