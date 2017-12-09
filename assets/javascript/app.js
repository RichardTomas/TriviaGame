$(document).ready(function() {

function initialScreen() {
	startScreen = "<p class='text-center quiz-container'><a class='btn btn-danger btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".main").html(startScreen);
}
initialScreen();

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	generateHTML();
	timer();
}); 

$("body").on("click", ".answer", function(event){
	playerAnswer = $(this).text();
	if(playerAnswer === answerKey[questionCounter]) {
		clearInterval(theClock);
		generateWin();
	}
	else {
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unanswered++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + answerKey[questionCounter] + "</p>";
	$(".main").html(gameHTML);
	setTimeout(wait, 3000);  
}

function generateWin() {
	correctAnswers++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + answerKey[questionCounter] + "</p>";
	$(".main").html(gameHTML);
	setTimeout(wait, 3000);  
}

function generateLoss() {
	incorrectAnswers++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ answerKey[questionCounter] + "</p>";
	$(".main").html(gameHTML);
	setTimeout(wait, 3000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>15</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='text-center first-answer answer'>A. " + multipleChoice[questionCounter][0] + "</p><p class='text-center answer'>B. "+multipleChoice[questionCounter][1]+"</p><p class='text-center answer'>C. "+multipleChoice[questionCounter][2]+"</p><p class='text-center answer'>D. "+multipleChoice[questionCounter][3]+"</p>";
	$(".main").html(gameHTML);
}

function wait() {
	if (questionCounter < 9) {
	questionCounter++;
	generateHTML();
	counter = 15;
	timer();
	}
	else {
		resultScreen();
	}
}

function timer() {
	theClock = setInterval(stopwatch, 1000);
	function stopwatch() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function resultScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Results" + "</p>" + "<p class='text-center'>Correct Answers: " + correctAnswers + "</p>" + "<p class='text-center'>Wrong Answers: " + incorrectAnswers + "</p>" + "<p class='text-center'>Unanswered: " + unanswered + "</p>" + "<p class='text-center'><a class='btn btn-danger btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".main").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctAnswers = 0;
	incorrectAnswers = 0;
	unanswered = 0;
	counter = 15;
	generateHTML();
	timer();
}

var startScreen;
var gameHTML;
var counter = 15;
// questions
var questionArray = ["Considered the show's breakout character, who plays the role of Barney Stinson on the TV series \"\ How I Met Your Mother\"\ ?", "This TV series follows billionaire playboy Oliver Queen, who fights crime and depravity as a secret vigilante.", "This TV show had the most-watched drama series episode in cable history with its season four premiere.", "What TV series features fairy tale characters that were transported to the \"\ real world\"\ seaside town of Storybrooke, Maine?", "This American crime comedy-drama TV series is inspired by real-life forensic anthropologist and novelist Kathy Reichs.", "Which of the following TV shows stars Jim Parsons as Sheldon Cooper, a genius who has no social skills?", "Which British period drama portrays the lives of the upper-class Crawley family and their servants in the post-Edwardian era?", "What new 2017 TV sitcom is a spin-off prequel to \"\ The Big Bang Theory\"\?", "Starring Freddie Highmore as Shaun Murphy, this TV show is based on a 2013 South Korean series of the same name.", "This 2017 teen-drama TV series features KJ Apa as Archibald \"\ Archie\"\ Andrews and Lili Reinhart as Elizabeth \"\ Betty\"\ Cooper."];
// multiple choice
var multipleChoice = [["Josh Radnor", "Bob Saget", "Jason Segel", "Neil Patrick Harris"], ["Arrow","Nikita","Birds of Prey","Smallville"], ["American Horror Story", "Heroes", "Sons of Anarchy", "The Walking Dead"], ["Once Upon a Time","Revenge","Grimm","The Originals"], ["Criminal Minds", "Bones", "Castle", "Cold Case"], ["Parks and Recreation","Modern Family","The Big Bang Theory","Two and a Half Men"], ["The Tudors", "Boardwalk Empire", "Lark Rise to Candleford", "Downton Abbey"], ["Young Howard","Young Raj","Young Sheldon","Young Penny"], ["Feud","The Good Doctor","Taboo","Mr. Robot"], ["Great News","Feud","Archie","Riverdale"]];
// right answers
var answerKey = ["D. Neil Patrick Harris", "A. Arrow", "D. The Walking Dead", "A. Once Upon a Time", "B. Bones", "C. The Big Bang Theory", "D. Downton Abbey", "C. Young Sheldon", "B. The Good Doctor", "D. Riverdale"];
var questionCounter = 0;
var playerAnswer;
var theClock;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

