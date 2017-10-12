// random target number - recreated with each game
// running total for game
// 4 crystals, each have a random value between 1 and 12
// wins and loses

$(document).ready(function(){  //JavaScript function that wraps everything

	$("#redNum");
	$("#greenNum")
	$("#blueNum")
	$("#yellowNum")

	$("#sumCrystals")
	$("#clickColor")
	$("#wins")
	$("#losses")

	$("#targetNum")

	var redNum = 0;
	var greenNum = 0;
	var blueNum = 0;
	var yellowNum = 0;

	var sumCrystals = 0;
	var clickColor = "";
	var wins = 0;
	var losses = 0;

	var targetNum = 0;

	redNum = Math.floor(Math.random() * 12) + 1;
	greenNum = Math.floor(Math.random() * 12) + 1;
	blueNum = Math.floor(Math.random() * 12) + 1;
	yellowNUm = Math.floor(Math.random() * 12) + 1;
		//generating the random number for each of the crystals

	$("#number-to-guess").text(targetNumber);

	var counter = 0;

	var numberOptions = [10, 5, 3, 7]; //expanding our array to include four options

	for (var i = 0; i < numberOptions.length; i++) {



	$(".crystal").on("click", function(){
		console.log('I am within the crystal on click function');

	var crystalValue = ($(this).attr("data-crystalvalue")); //using .attr("datacrystalvalue") allows us to grab the value out of the d"data-crystalvalue attribute
    crystalValue = parseInt(crystalValue);	

    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
    	alert("You win!");
    }

    else if (counter >= targetNumber) {
    	alert("You lose!!");
    }


	});  


	
});
