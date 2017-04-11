var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'venia',
    password : 'venia_26',
    database : 'node'
});
function Login(){
 var response = {
		isLogin: '', //todo: should contain true or false
		user: {} //todo: should contain user data from database
 };
 var query = function (respBody, callback) {
  //connection.connect();
        
  connection.query('SELECT * FROM  nodetable WHERE login=\'' + respBody.mail + '\'', function(error, results, fields){
	 // console.log(results[0]);
    if (error) throw error;
	
for (var dates in results) {
       var userData = {};

         for(var i in results[dates]){
         userData[i] = results[dates][i]; 
         };
         console.log(userData.password);
};
     

	if(userData.password === respBody.pass){
console.log("ok");
} else {
console.log("false");

}
	
	callback(results[0]);
  });
     
  //connection.end();
 };

 return {
  get: function (respBody, callback) {
	query(respBody, callback);
  }
 };

};

module.exports = Login;