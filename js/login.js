$(document).ready(function(){
	$('#login').click(function(){
		console.log($('#employeeid').val());
		sessionStorage.setItem('employeeId', $('#employeeid').val());
		//console.log('inside login');
		window.location = 'request.html';
	});
	$('#clear').click(function(){
		
	});
});

