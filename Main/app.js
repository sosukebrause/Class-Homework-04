// how add multiple items into an obect variable, key
//how to call multiple object variable keys at once

$(document).ready(function () {
  var questions = [
    {
      title: "q1",
      content: "This is the first question",
      choices: ["aaa", "bbb", "ccc"],
      answer: "",
    },
    {
      title: "q2",
      content: "This is the second question",
      choices: ["aaa", "bbb", "ccc"],
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

  renderAnswers();
  function renderAnswers(answers) {
    var answersList = document.querySelector("#inputGroupSelect01");
    for (var i = 0; i < .length; i++) {
      var answer = answers[i];
      console.log(answer);
    }
  }

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
