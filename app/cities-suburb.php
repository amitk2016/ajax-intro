<?php 

// Connect to Database 
$dbc = new mysqli('localhost', 'root', '', 'ajax_location');

$CityID = $dbc->real_escape_string($_GET['CityID']);

$sql = "SELECT suburb_id,suburb_name FROM suburb WHERE city_id = $CityID";

// RUN THE QUERY 
$result = $dbc->query($sql);

if ( $result->num_rows > 0 ) {
	
	$suburb = json_encode( $result->fetch_all(MYSQL_ASSOC) );

	// PREPARE THE HEADER TO SAY WE ARE ABOUT TO SEND JSON 
	header('Content-Type: application/json');

	echo $suburb;

}else {

	//No results
	echo 'error';
}