var questionsArr = 
[
    {question:'JavaScript is the best language.',
    answer: true},

    {question:'There are seven days in a week.',
    answer: true},

    {question:'July has 30 days.',
    answer: false},

    {question:'7x7 is 49.',
    answer: true},

    {question:'11x11 is 111.',
    answer: false},
]
let numOfAgrees = 0

function runQuiz(){
    for( i=0; i < questionsArr.length; i++){
     if(confirm(questionsArr[i].question) === questionsArr[i].answer) {
            numOfAgrees++
        }  else{}
    }
    var score = (numOfAgrees/questionsArr.length) * 100
    alert ('You Scored '+ Math.round(score) + '%!')
}