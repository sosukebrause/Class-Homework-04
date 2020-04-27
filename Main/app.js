$(document).ready(function () {
  var questions = [
    "This is the first question",
    "This is the second question",
    "This is the third question",
  ];
  console.log(questions);

  // var quiz = [
  //   {
  //     title: "q1",
  //     description: "",
  //     choices: ["", "", "", ""],
  //     answer: "",
  //   },
  // ];

  // function getQuestion() {
  //   var currentQuestion = quiz[currentQuestionIndex];
  // }
  var count = 0;
  $("#question").text(questions[count]);
  $("#nextQuestion").on("click", function () {
    count++;

    $("#question").text(questions[count]);
  });

  var questionCountSpan = document.querySelector("#question-count");
  var nextQuestion = document.querySelector("#nextQuestion");

  renderQuestions();

  function renderQuestions() {
    questions.innerHTML = "";
    questionCountSpan.textContent = questions.length;
    var questionsList = document.querySelector("#questions-list");

    for (var i = 0; i < questions.length; i++) {
      var question = questions[i];

      var li = document.createElement("li");
      li.textContent = question;
      questionsList.appendChild(li);
    }
  }

  nextQuestion.addEventlistener("click", function (event) {
    event.preventDefault();
    question = question[0];
  });
});
