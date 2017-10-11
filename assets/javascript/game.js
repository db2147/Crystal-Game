// random target number - recreated with each game
// running total for game
// 4 crystals, each have a random value between 1 and 12
// wins and loses

$(document).ready(function(){

	var redNum = 0;
	var greenNum = 0;
	var blueNum = 0;
	var yellowNUm = 0;

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

	$(".crystal").on("click"), function(){
		console.log('I am within the crystal on click function');

		}); //not sure why lighting up
	
	});
}