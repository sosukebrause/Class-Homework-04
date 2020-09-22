var quiz = {
  question: [
    "Which of following is not 'reserved' as binding names in JavaScript?",
    "Indenting or adding spaces in front of statements that are part of a larger statement is required for the program to work",
    "Which of the following uses the conventional style of capitalizing when creating variables?",
    "whats wrong with you?",
    "Approximately when was html released?",
    "You can put three dots before the function's last parameter to “spread” out the array into the function call, passing its elements as separate arguments.",
    "Which of the following is not a property for layout options using CSS?",
    "Which of the following is not an iterating loop in JavaScript?",
    "How many moons are on venus?",
    "What percentage of the world population does the US account for?",
    "In recent years the US has held up to 25% of the entire world's correctional population. White Americans comprise of about 65% of the population, hispanics 23% black Americans about 13%. How are these groups represented by their incarceration rates from least to greatest?",
  ],
  options: {
    list: [
      ["Finally", "Extra", "Void"],
      ["True", "False", "Triple dog dare"],
      ["PoopInHats", "WEYELLALOT", "grammerJew"],
      ["Nothing", "Everything", "beat around bush"],
      ["1988-1990", "1990-92", "1992-1994"],
      ["Yep", "Nope", "`I like to live dangerously`"],
      ["Flex", "Float", "Flick"],
      ["for/of", "do/while", "each/of"],
      ["8", "14", "None"],
      ["Less than 5%", "Around 10%", "More than 15%"],
      [
        "Black > 30%; Hispanic > 20%; White < 15%",
        "White < 15%; Black > 30%; Hispanic > 20%",
        "White < 15%; Hispanic > 20%; Black > 30%",
      ],
    ],
  },
  correct: [1, 2, 3, 1, 3, 1, 3, 3, 1, 3],
};
var intervalID;
var count = 180;
let q = 0;
var score = 0;
var userInitials = localStorage.getItem("userInitials");
var highScore = localStorage.getItem("highScore");

function displayLocalStorage() {
  userInitials;
  highScore;
  $("#userId").text(userInitials);
  $("#highScore").text(highScore);
}
displayLocalStorage();

$(document).ready(function () {
  hideCard();
  $(".result").hide();

  $("#beginbtn").on("click", function (event) {
    event.preventDefault();
    showCard();
    renderQuestions();
    renderOptions();
    nextQuestionButton();
    hideForm();
    runTimer();
  });
});

function renderQuestions() {
  $("#counter").html(`Question: ${q + 1}/10`);

  var q1 = $("<p></p>").text(quiz.question[q]);
  // Create text with DOM
  $("#question").prepend(q1); // Append new elements
}
function renderOptions() {
  var opt1 = quiz.options.list[q][0];
  var opt2 = quiz.options.list[q][1];
  var opt3 = quiz.options.list[q][2];
  var options = `<select class="custom-select" id="inputGroupSelect01">
  <option selected value="-1">Choose...</option>
  <option id="text1" value="1">${opt1}</option>
  <option id="text2" value="2">${opt2}</option>
  <option id="text3" value="3">${opt3}</option>
  </select>  
    `;
  $("#options").prepend(options);
}

function nextQuestionButton() {
  var nextBtn = $(`<button id="nextBtn">`);
  nextBtn.text("Continue");
  $(".continue").append(nextBtn);
  $("#nextBtn").on("click", function (event) {
    event.preventDefault();
    const answer = parseInt($(".custom-select").val());
    console.log(answer);
    if (answer === -1) {
      alert("Choose an answer to continue");
      return;
    }

    checkAnswer(answer);
    $("p").remove();
    $(".custom-select").remove();
    q++;
    if (q === 3) {
      // count = 0;
      stop();
    }
    renderQuestions();
    renderOptions();
    renderCount();
  });
}

function checkAnswer(answer) {
  if (answer !== quiz.correct[q]) {
    count -= 10;
    alert("Incorrect. Minus 10 seconds.");
  } else {
    score++;
    alert("Correct!");
  }
}

function runTimer() {
  intervalID = setInterval(decrement, 1000);
}
function decrement() {
  count--;
  $("#clock").html(
    "<p>You have " + count + " seconds remaining to complete quiz</p>"
  );
  if (count === 0) {
    $("#clock").hide();
    stop();
  }
}

function hideForm() {
  $("#beginbtn").hide();
}
function hideCard() {
  $(".card").hide();
}
function showCard() {
  $(".card").show();
}

function saveScore() {
  $("#save").on("click", function () {
    var userInitials = $("#userInitials").val();

    if (score < highScore) {
      alert("You did not get the high score, please try again.");
      $("#userInitials").val() = "";
      window.location.reload();
    } else {
      alert("Congratulations, you currently have the highest score");

      localStorage.setItem("userInitials", userInitials);
      localStorage.setItem("highScore", score);
      displayLocalStorage();
    }
    $("#userInitials").val() = "";
    window.location.reload();
  });
}

function stop() {
  clearInterval(intervalID);
  hideCard();
  $(".result").show();
  $("#result").append(`You got ${score}/10 correct`);

  if (score < highScore) {
    $("#score").append("You scored below the high score");
  } else {
    $("#score").append("Congratulations, you've gotten the highest score");
    $("#userId").append(userInitials);
    $("#score").append(highScore);
    // displayLocalStorage();
  }
  saveScore();
}

// $("#nextQuestion").on("click", function () {
//   count++;
//   if (count === questions.length) {
//     count = 0;
// }
