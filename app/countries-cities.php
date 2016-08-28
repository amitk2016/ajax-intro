<?php 

// Connect to Database 
$dbc = new mysqli('localhost', 'root', '', 'ajax_location');

$CountryID = $dbc->real_escape_string($_GET['CountryID']);

$sql = "SELECT 	CityID,CityName FROM cities WHERE CountryID = $CountryID";

// RUN THE QUERY 
$result = $dbc->query($sql);

if ( $result->num_rows > 0 ) {
	// Extract the results and convert to into JSON
	$cities = json_encode( $result->fetch_all(MYSQL_ASSOC) );

	// PREPARE THE HEADER TO SAY WE ARE ABOUT TO SEND JSON 
	header('Content-Type: application/json');

	echo $cities ;

}else {

	echo "error";
}

