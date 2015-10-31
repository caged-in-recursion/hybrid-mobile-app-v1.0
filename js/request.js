$(document).ready(function(){
	var employeeId = sessionStorage.getItem('employeeId');
	$('#employeeId').val(employeeId);
	$("#employeeId").prop("readonly", true);
	initialise();
	$('#submitRequest').click(function(){
		getData();
	});
	//sendData();
});

function initialise(){
	/*$('#map_canvas').gmap().bind('init', function(ev, map) {
		$('#map_canvas').gmap('addMarker', {'position': '57.7973333,12.0502107', 'bounds': true}).click(function() {
			$('#map_canvas').gmap('openInfoWindow', {'content': 'Hello World!'}, this);
		});
	});*/
	$('#map_canvas').gmap({'callback': function() {
		var self = this;
		self.getCurrentPosition(function(position, status) {
			console.log(status);
			console.log('hi');
			if ( status === 'OK' ) {
				console.log(position);
				var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				self.addMarker({'position': clientPosition, 'bounds': true});
				self.addShape('Circle', { 
					'strokeWeight': 0, 
					'fillColor': "#008595", 
					'fillOpacity': 0.25, 
					'center': clientPosition, 
					'radius': 15, 
					'clickable': false 
				});
			}
		});   
	}});
}

function getData(){
	var data = $('#cab-request input');
	var values = {};
	$(data).each(function(){
		values[this.name] = $(this).val();
	});
		
	
	/*var value = [];
	$(data).each(function(index){
		value: data[index].val()
	})*/
	console.log(values);
	sendData(values);
}

function sendData(values){
	var request =  $.ajax({
            type: 'POST',
            url: 'http://192.168.56.1:8080/LoggingRestApp/rest/user/logApplicationData',
            dataType: 'text',
			data: JSON.stringify(values),
            //contentType: 'application/json; charset=utf-8',
            /*success: function(response) {
                //$('#lblData').html(JSON.stringify(response));
				console.log('Success');
            },
            error: function() {
                console.log('Error');
            }*/
    });
	
	request.done(function(response){
		console.log(response);
	});
}