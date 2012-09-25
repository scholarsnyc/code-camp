$(document).ready(function () {
	var randomNumber;
	
	function numberRandomizer() {
		return Math.floor(Math.random() * 3);
	}

	function setupGame() {
		$('#buttons > button').unbind('click');
		randomNumber = numberRandomizer() ;
		$('#buttons > button')
			.eq(randomNumber)
			.click(winScenario)
			.siblings('button')
			.click(loseScenario);
		$('span#cheat').html(randomNumber);
	}
	
	function winScenario() {
		sendToConsole("You got it!");
		incrementScore();
	}
	
	function loseScenario() {
		sendToConsole("sorry pick again :(");
		decrementScore();

	}
	
	function incrementScore() {
		var currentScore = $('#current-score'),
			newScore = parseInt(currentScore.text()) + 1;
		currentScore.text(newScore);
		setupGame();
	}
	
	function decrementScore() {
		var currentScore = $('#current-score'),
			newScore = parseInt(currentScore.text()) - 1;
		currentScore.text(newScore);
	}
	
	function sendToConsole(message) {
		$('#console').html('<p>' + message + '</p>');
	}

	setupGame();
});