function cleverDice(maxRoll) { 
	return Math.floor(Math.random() * maxRoll); 
}



var questionsArray = ["You rolled: 1. Go left!", "Go right!", "Straight ahead", "Run away!"];

function commands() {
	var diceNumber = cleverDice(questionsArray.length);
	console.log(questionsArray[diceNumber]);
}


