$(document).ready(function(){
	$('#Country').change(showCities);
});

function showCities(){
	
	var CountryID = $(this).val();

	// make sure that ID is a number 
	if( isNaN(CountryID)){
		return;
	}
	// Prepare AJAX
	$.ajax({
		type:'get',
		url:'app/countries-cities.php?CountryID='+CountryID,
		success : function(dataFromServer){
			console.log(dataFromServer);
		},
		error: function(){
			console.log('Can not connect to server.......');
		}	
	})
}