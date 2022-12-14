var currentquestion = 0;
var questions = [{
  "question": "D.E.I stands for Diversity, Equity and Inclusion.",
  "response": "",
  "answer": true
}, {
  "question": "The goal of diversity is to erase individual differences from our minds, workplace, or society.",
  "response": "Its goal is to enhance individual differences so that respect and dignity in the workplace are achieved.",
  "answer": false
}, {
  "question": "45% of job seekers consider workplace diversity an important factor when considering employment opportunities.",
  "response": "67% of job seekers consider workplace diversity an important factor when considering employment opportunities.",
  "answer": false
},
   {
    "question": "44% of tech employees work at a company with a DEI department.",
    "response": "",
    "answer": true
},
   {
    "question": "62% of high tech workers are white.",
    "response": "",
    "answer": true
   }
];

(function() {
  // your page initialization code here
  fnReset(); //call reset on document ready

  document.getElementById("rinextquestion").addEventListener('click', function(event) {
    fnCheck();
  });

  document.getElementById("richecktrue").addEventListener('click', function(event) {
    fnCheck(true);
  });
  document.getElementById("richeckfalse").addEventListener('click', function(event) {
    fnCheck(false);
  });
  document.getElementById("rinextquestion").addEventListener('click', function(event) {
    fnNext();
  });
  document.getElementById("rireset").addEventListener('click', function(event) {
    fnReset();
  });

})();

function fnReset() {

  document.getElementById('riquestionresponse').classList.add('rihide');
  document.getElementById('rinextquestion').classList.add('rihide');
  document.getElementById('rireset').classList.add('rihide');
  document.getElementById('riquestionbox').classList.remove('rihide');
  currentquestion = 0;
  document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
}

function fnNext() {
  document.getElementById('riquestionresponse').classList.add('rihide');
  if (currentquestion < questions.length - 1) {
    currentquestion = currentquestion + 1;
    document.getElementById('rinextquestion').classList.add('rihide');
    document.getElementById('rireset').classList.add('rihide');

  } else {

    document.getElementById('rinextquestion').classList.add('rihide');
    document.getElementById('riquestionbox').classList.add('rihide');
    document.getElementById('rireset').classList.remove('rihide');
  }
  document.getElementById('riquestionresponse').classList.add('rihide');
  document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
}


function fnCheck(answer) {
document.getElementById('riquestionresponse').classList.remove('ricorrect','riincorrect');
  var questionAnswer = questions[currentquestion].answer;
  if (questionAnswer === answer) {
    // show correct
 document.getElementById('riquestionresponse').classList.add('ricorrect');
 document.getElementById('riquestionresponse').innerHTML = "You chose: ''" + answer + "''. The answer is '" + questionAnswer + "'. " + questions[currentquestion].response;
  } else {
    // show incorrect
    document.getElementById('riquestionresponse').classList.add('riincorrect');
    document.getElementById('riquestionresponse').innerHTML = "You chose: ''" + answer + "''. The answer is '" + questionAnswer + "'. " + questions[currentquestion].response;
  }
document.getElementById('riquestionresponse').classList.remove('rihide');
document.getElementById('rinextquestion').classList.remove('rihide');
}

