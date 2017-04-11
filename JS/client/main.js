$(function(){				
				$('#select_link').click(function(e){
;					
					var type = 'GET';
					var	contentType = 'application/json';
					var requestData = '';
					var	url = 'http://localhost:3000/api';
					var	callback = publishUser;
						
					server_transport(type, requestData, contentType, url, callback);
				});
				
				$('#auth_me').click(function(e){
					console.log("auth");
					var userData ={};
					var userPass = document.getElementById('password').value;
					var userMail = document.getElementById('mail').value;
					var encodedPass = $.md5(userPass);
					
					userData.mail = userMail;
					userData.pass = encodedPass;
;					
					var type = 'GET';
					var	contentType = 'application/json';
					var requestData = 'mail=' + userData.mail + '&pass=' + userData.pass;
					var	url = 'http://localhost:3000/auth';
					var	callback = publishUser;
						
					server_transport(type, requestData, contentType, url, callback);
				});
				$('#insert_user').click(function(e){
					var userData = {
						mail: '',
						pass: ''
					};
					var userPass = document.getElementById('password').value;
					var userMail = document.getElementById('mail').value;
					var encodedPass = $.md5(userPass);
					
					userData.mail = userMail;
					userData.pass = encodedPass;
					
					var type = 'PUT';
					var	contentType = 'application/json';
					var requestData = JSON.stringify(userData);
					
					var	url = 'http://localhost:3000/insert';
					var	callback = confrimAddNewUser;
					
					server_transport(type, requestData, contentType, url, callback);
				});
				
				function server_transport(type, requestData, contentType, url, callback) {
					//console.log(requestData);

					$.ajax({
						type: type,
						data: requestData,
						contentType: contentType,
						url: url,						
						success: function(response) {
							callback(response);
						}
					});
				};
				
				function publishUser(data) {
					
					var userList = document.getElementById('users-list');
					var newDiv = '';
					
					for(var id in data){
						newDiv += '<div id="id_' + id + '">' + '<div id="mail_' + id + '" class="mail">' + data[id].mail + '</div>' + '<div id="pass_' + id + '" class="pass">' + data[id].pass + '</div>' + '</div>';
					};
					
					userList.innerHTML = newDiv;
				};
				
				
				function confrimAddNewUser(data){
					console.log(data);
				};
			});