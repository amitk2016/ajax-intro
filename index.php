<!DOCTYPE html>
<html>
<head>
	<title>Ajax Location Select</title>
	<meta charset="utf-8">
</head>
<body>

<h1>Where Do You live?</h1>

	<select id="Country">
		<option>Please select your country</option>
		<?php $dbc = new mysqli('localhost', 'root', '', 'ajax_location');
			$sql = "SELECT CountryName, CountryID
					FROM Country";

			$result = $dbc->query($sql);

			while($country = $result->fetch_assoc() ) :	 ?>

			<option value="<?= $country['CountryID']?>"><?= $country['CountryName']?></option>
		<?php endwhile;?>
			
	</select>

	<select id="cities" name="cities">

	<option>Please select your city</option>
		
		

	</select>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js/functions.js"></script>

</body>
</html>