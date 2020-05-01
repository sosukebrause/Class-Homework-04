var myQuestions = {
  question: [
    "Which of following is not 'reserved for use' as binding names in JavaScript?",
    "whats wrong with you?",
    "how old are you?",
  ],
  options: {
    list: [
      ["Finally", "Extra", "Void"],
      ["Nothing", "Everything", "Potato"],
      ["31", "13", "Go away"],
    ],
  },
  correct: {
    list: [1, 1, 0],
  },
};
console.log(myQuestions.question);
console.log(myQuestions.options.list[0]);

$(document).ready(function () {
  $("#beginbtn").on("click", function (event) {
    event.preventDefault();
    showQuestion();
    renderOptions();
    renderCount();
    nextQuestionButton();
    hideForm();
    run();
  });
});

function showQuestion() {
  var q1 = $("<p></p>").text(myQuestions.question[0]);
  var txt3 = document.createElement("p");
  txt3.innerHTML = "Text."; // Create text with DOM
  $("h5").append(q1, txt3); // Append new elements
}

function renderOptions() {
  var options = `
      <option selected>Choose...</option>
      <option id="text1" value="1">${myQuestions.options.list[0][0]}</option>
      <option id="text2" value="2">ababab</option>
      <option id="text3" value="3">caca</option>
    `;
  $("#inputGroupSelect01").prepend(options);
}

function renderCount() {
  var $count = $("<h2>");
  var counter = 1;
  $("h2").append($count, counter);
}
function nextQuestionButton() {
  var $nextBtn = $("<button>");
  $nextBtn.text("Next Question");
  $("body").append($nextBtn);
}
var intervalID;
var count = 100;
function run() {
  intervalID = setInterval(decrement, 1000);
}
function decrement() {
  count--;
  console.log(count);
  $("#clock").html("<h2>You have " + count + " seconds remaining</h2>");
  if (count === 95) {
    $("#clock").hide();
    stop();
  }
}
function stop() {
  clearInterval(intervalID);
}
function hideForm() {
  $("form").hide();
}
// $("#nextQuestion").on("click", function () {
//   count++;
//   if (count === questions.length) {
//     count = 0;
//   }
