// random target number - recreated with each game
// running total for game
// 4 crystals, each have a random value between 1 and 12
// wins and loses

$(document).ready(function(){  //JavaScript function that wraps everything

	var redNum = 0;
	var greenNum = 0;
	var blueNum = 0;
	var yellowNum = 0;

	var sumCrystals = 0;
	var clickColor = "";
	var wins = 0;
	var losses = 0;

	var targetNum = 0;

	var counter = 0;


	function gameReset () {
		redNum = Math.floor(Math.random() * 12) + 1;
		greenNum = Math.floor(Math.random() * 12) + 1;
		blueNum = Math.floor(Math.random() * 12) + 1;
		yellowNUm = Math.floor(Math.random() * 12) + 1;
		//generating the random number for each of the crystals

		targetNum = Math.floor(Math.random() * 102 + 19;  //generates the target number

		$("#targetNumber").text("Target Number: " +targetNum);
		$("#totalNumber").html("Total: "+ 0);

	 	$("#blueCrystal").attr("data-crystalvalue", blueNum);   //.attr retrieves the number from crystal
		$("#redCrystal").attr("data-crystalvalue", redNum);
		$("#greenCrystal").attr("data-crystalvalue", greenNum);
		$("#yellowCrystal").attr("data-crystalvalue", yellowNum);

	  
	  counter = 0;
	}

     	
	$(".crystal").on("click", function(){
		console.log('I am within the crystal on click function');

	var crystalValue = ($(this).attr("data-crystalvalue")); //using .attr("datacrystalvalue") allows us to grab the value out of the d"data-crystalvalue attribute
    crystalValue = parseInt(crystalValue);	

    counter += crystalValue;


    if (counter === targetNum) {
    	alert("You win!");
    	wins++;
    	$("#sWins").html("Wins: "+ wins);
    	gameReset();
    }
    else if (counter >= targetNumber) {
    	alert("You lose!!");
    	losses++;
    	$("#sLoses").html("Loses: "+ losses);
    	}
	});  

	gameReset();

});   
	
 
