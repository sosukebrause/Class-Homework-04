// how add multiple items into an obect variable, key
//how to call multiple object variable keys at once

$(document).ready(function () {
  var questions = [
    {
      title: "how many moons are on venus",
      options: ["Eight", "14", "None"],
      choices: [
        { text: "A", value: 10 },
        { text: "B", value: 20 },
        { text: "C", value: 30 },
      ],
      answer: "",
    },
    {
      title:
        "Which of following is not 'reserved for use' as binding names in JavaScript?",
      options: [{ text: "finally" }, { text: "extra" }, { text: "void" }],
      choices: [
        { text: "A", value: 10 },
        { text: "B", value: 20 },
        { text: "C", value: 30 },
      ],
      answer: "B",
    },
  ];
  $("#question").text(questions[0].title);
  $("#question").text(questions[1].title);
 
 questionOptions.innerHTML = "This is a paragraph.";

  function renderAnswers() {
    var questionOptions = document.createElement("li");
    
    document.getElementById("options").appendChild(questionOptions);
  }

  renderAnswers();

  // function renderQuestions() {
  //   var optionsList = document.querySelector("#options");

    // li.textContent = content;
    // for (var i = 0; i < questions.length; i++) {
    //   var content = content[i];

    // }
  }

  // var count = 0;
  // $("#nextQuestion").on("click", function () {
  //   count++;
  //   if (count === questions.length) {
  //     count = 0;
  //   }
  //   var questionCountSpan = document.querySelector("#question-count");
  //   questionCountSpan.textContent = count + 1;

  //   // $("#question").text(questions[count].content);
  //   // $("#options").text(questions[count].options[count].text[count]);
  //   $("#text1").text(questions[count].choices[0].text);
  //   $("#text2").text(questions[count].choices[1].text);
  //   $("#text3").text(questions[count].choices[2].text);
  // });
  // nextQuestion.addEventlistener("click", function (event) {
  //   event.preventDefault();
  //   question = questions[0];
  // });
});
// var nextQuestion = document.querySelector("#nextQuestion");

// renderAnswers();
// function renderAnswers(answers) {
//   var answersList = document.querySelector("#inputGroupSelect01");
//   for (var i = 0; i < questions.length; i++) {
//     var answer = answers[i];
//     console.log(answer);
//   }
// }

// renderQuestions();

// function renderQuestions() {
//   var questionsList = document.querySelector("#questions-list");

//   for (var i = 0; i < questions.length; i++) {
//     var content = content[i];

//     var li = document.createElement("li");
//     li.textContent = content;
//     questionsList.appendChild(li);
//   }
// }
