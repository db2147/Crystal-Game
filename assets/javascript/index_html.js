<!DOCTYPE html>
<html>
<head>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<title></title>
</head>
<body>

	<div class="container">
		<h1 class= "text-center">Crystals Game</h1>

		<div class="row">

			<div class="col-sm-6 text-center">
				<h1 id="targetNumber">Target Number: </h1>
			</div>

			<div class="col-sm-6 text-center">
				<h1 id="totalNumber">Total: </h1>
			</div>

		</div> <!-- end row-->

		<div class="row">

			<div class="col-sm-3 text-center">
				<img id="blueCrystal" class="crystal" src="assets/images/blue.png">
			</div>

			<div class="col-sm-3 text-center">
				<img id="greenCrystal" class="crystal" src="assets/images/green.png">
			</div>

			<div class="col-sm-3 text-center">
				<img id="redCrystal" class="crystal" src="assets/images/red.png">
			</div>

			<div class="col-sm-3 text-center">
				<img id="yellowCrystal" class="crystal" src="assets/images/yellow.png">
			</div>

		</div> <!-- end row-->

		<div class="row">
			<div class="col-sm-2 col-md-offset-5 text-center bg-primary sDown">
					<h2 id="sWins">Wins: </h2>
					<h2 id="sLoses">Losses: </h2>
			</div>			
		</div>

	</div>

	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>

	<script type="text/javascript" src="assets/javascript/javascript2.js"></script>

</body>
</html>