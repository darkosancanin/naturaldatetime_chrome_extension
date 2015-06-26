$(document).ready(function() {
	var askQuestion = function(){
		var questionText = $('#question').val();
		if(questionText.length == 0) return;
		chrome.tabs.create({url:'http://localhost:1803/?client=chrome&client_version=1.0&q=' + questionText});
		//chrome.tabs.create({url:'http://www.naturaldateandtime.com/q/?client=chrome&client_version=1.0&q=' + questionText});
	};
	
	$('#askButton').click(function(){
		askQuestion();
	});
	
	$("#question").keypress(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			askQuestion();
		}
	});
	
	$('#logo').click(function(){
		chrome.tabs.create({url:'http://www.naturaldateandtime.com'});
	});
	
	var randomQuestions = ["e.g. Whats the time in Sydney when it's 10:30PM in New York?", "e.g. When does daylight saving time start in Japan?", "e.g. If its 8pm in Cleveland, whats the time in California?", "e.g. When does daylight saving time start in 2016 in Chicago?"];
    var randomIndex = Math.floor(Math.random() * (randomQuestions.length));
    $('#question').attr('placeholder', randomQuestions[randomIndex]);
});