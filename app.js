$(document).ready(function () {
  var questions = [
    "This is the first question",
    "This is the second question",
    "This is the third question",
  ];
  var count = 0;
  $("#question").text(questions[count]);
  $("#nextQuestion").on("click", function () {
    count++;
    $("#question").text(questions[count]);
  });
});
var questions = document.querySelector("#questions-list");
var questionCountSpan = document.querySelector("#question-count");

renderQuestions();

function renderQuestions() {
  questions.innerHTML = "";
  questionCountSpan = questions.length;

  questionE1.addEventlistener("click", function () {
    for (var i = 0; i < questions.length; i++) {
      var question = questions[i];

      var li = document.createElement("li");
      li.textContent = question;
      question - list.appendChild(li);
    }
  });
}
