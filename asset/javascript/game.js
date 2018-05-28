		
		 var computerChoose = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

		 var wins = 0;
		 var losses = 0;
		 var numGuess = 9;
		 var guessChoose = [];

		 document.onkeyup = function(event) {

		 	var userGuess = event.key;

		 	var computerGuess = computerChoose[Math.floor(Math.random() * computerChoose.length)];

		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	

			if (options.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					numGuess = 9;
					guessChoose = [];
				}

				if (userGuess != computerGuess) {
					numGuess --;
					guessChoose.push(userGuess);
				}

				if (numGuess === 0) {

				numGuess = 9;
				losses ++;
				guessChoose = [];

				
			}

			var answer = 
			"<h1> The Psychic Game </h1><br><br>" +
			"<p>Guess what letter I'm thinking of!</p><br>" +
			"<p>Wins: " + wins + "</p><br>" +
			"<p>Losses: " + losses + "</p><br>" +
			"<p>Guesses Left: " + numGuess + "</p><br>" +
			"<p>Your Guesses so far: " + guessChoose.join(", ") + "</p><br>";

			document.querySelector("#content").innerHTML = answer;

			
			}
		};


