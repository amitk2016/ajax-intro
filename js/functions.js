$(document).ready(function(){
	$('#Country').change(showCities);
	$('#cities').change(showsuburb);
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

			// clear the cities select elements 
			$('#cities').html('');
			$('#cities').append('<option value='+'>'+'Please Select an Cities'+'</option>');

			// Check to see if there was any error returning 	
			if (dataFromServer != 'error') {
				// Loop over the array 
				for(var i = 0; i< dataFromServer.length; i++){
					$('#cities').append('<option value='+dataFromServer[i].CityID+'>'+dataFromServer[i].CityName+'</option>');

				}
			}else{

				$('#cities').append('<option value='+'>There is no Cities</option>');


			}

		},
		error: function(){
			console.log('Can not connect to server.......');
		}	
	})
}

	function showsuburb(){

		var CityID = $(this).val();

		// make sure that ID is a number 
		if( isNaN(CityID)){
			return;
		}

		$.ajax({

			type:'get',
			url: 'app/cities-suburb.php?CityID='+CityID,
			success : function	(dataFromServer){
				 console.log (dataFromServer);


			// clear the cities select elements 
			$('#suburb').html('');
			$('#suburb').append('<option value='+'>'+'Please Select an suburb'+'</option>');

			// Check to see if there was any error returning 	
			if (dataFromServer != 'error') {
				// Loop over the array 
				for(var i = 0; i< dataFromServer.length; i++){
					$('#suburb').append('<option value='+dataFromServer[i].suburb_id+'>'+dataFromServer[i].suburb_name+'</option>');
				}

			}else{

				$('#suburb').append('<option value='+'>There is no suburb</option>');


				}
			
		},

		error: function(){
			console.log('Can not connect to server.......');
		}	
			



		})

	}

