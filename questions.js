var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
  ];

  var currentQuestion = 0;
  var correctAnswers = 0;
  var timeLeft = 60;
  
$('#NextQ').hide();
$('#submitR').hide();
$('.form-group').hide();
document.getElementById("QuizStart").addEventListener("click", function() {
    $('#QuizStart').hide();
    displayQuestion();
    timeCount();
});
function displayQuestion() {
    $('.choiceList').find("button").remove();
    $('.question').text("Question: "+questions[currentQuestion].title);
        for (var x=0; x<questions[currentQuestion].choices.length; x++) 
        {
            $('<button/>', {id: x, text: questions[currentQuestion].choices[x]}).appendTo('.choiceList');
        }
        checkAnswer();
}
function checkAnswer() {
    document.getElementById('0').addEventListener("click", guess);
    document.getElementById('1').addEventListener("click", guess);
    document.getElementById('2').addEventListener("click", guess);
    document.getElementById('3').addEventListener("click", guess);
}
function guess() {
    var fired_button = $(this).text();
    console.log(fired_button);
    if (fired_button == questions[currentQuestion].answer) {
        correctAnswers++;
        currentQuestion++;
        checkQuestion();
    }
    else {
        currentQuestion++;
        checkQuestion();
        timeLeft= timeLeft -10;
    }
}
function checkQuestion() {
    if (currentQuestion == 5) {
        displayResult();
    }
    else{
        displayQuestion();
    }
}
function displayResult() {
    $('.question').hide();
    $('.choiceList').hide();
    $('#timer').hide();
    $('.result').text('You scored '+ correctAnswers+ ' out of 5 questions.');
    $('.form-group').show();
    $('#submitR').show();
}
function submitResult() {
    $('#NextQ').hide();
    $('#submitR').hide();
    $('.form-group').hide();
    $('.result').hide();
    var userName = document.querySelector('#exampleFormControlTextarea1').value;
    localStorage.setItem('Name', userName);
    console.log(userName);
    var x = document.createElement("LI");
  var t = document.createTextNode(userName + ' Scored ' + correctAnswers + ' out of 5.');
  x.appendChild(t);
  document.getElementById("Ranking").appendChild(x);
}

function timeCount() {
      
        var timeInterval = setInterval(function() {
          document.getElementById('timer').textContent = timeLeft + " seconds remaining";
          timeLeft--;
      
          if (timeLeft === 0) {
            clearInterval(timeInterval);
            displayResult();
          }
      
        }, 1000);
}