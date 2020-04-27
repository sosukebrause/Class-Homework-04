// function getQuestion() {
//   var currentQuestion = quiz[currentQuestionIndex];
// }

$(document).ready(function () {
  var questions = [
    {
      title: "q1",
      content: "This is the first question",
      choices: ["cdcdc", "wqqw", "qwq", "qwwq"],
      answer: "",
    },
    {
      title: "q2",
      content: "This is the second question",

      choices: ["cdcdc", "wqqw", "qwq", "qwwq"],
      answer: "",
    },
  ];
  console.log(questions);

  var count = 0;
  $("#question").text(questions[count].content);
  $("#nextQuestion").on("click", function () {
    count++;
    if (count === questions.length) {
      count = 0;
    }
    var questionCountSpan = document.querySelector("#question-count");
    questionCountSpan.textContent = count + 1;

    $("#question").text(questions[count].content);
  });

  var nextQuestion = document.querySelector("#nextQuestion");

  renderQuestions();

  function renderQuestions() {
    var questionsList = document.querySelector("#questions-list");

    for (var i = 0; i < questions.length; i++) {
      var content = content[i];

      var li = document.createElement("li");
      li.textContent = content;
      questionsList.appendChild(li);
    }
  }

  nextQuestion.addEventlistener("click", function (event) {
    event.preventDefault();
    question = questions[0];
  });
});
