var questionsArr = 
[
    {question:'The chemical formula NaCl is that of table salt',
    answer: true},

    {question:'There are seven days in a week.',
    answer: true},

    {question:'July has 30 days.',
    answer: false},

    {question:'7x7 is 49.',
    answer: true},

    {question:'11x11 is 111.',
    answer: false},

    {question: 'One mole is 6.022x10^23 units',
    answer: true},
]
var numCorrect = 0

function runQuiz(){
    for( i=0; i < questionsArr.length; i++){
     if(confirm(questionsArr[i].question) === questionsArr[i].answer) {
            numCorrect++
        }
    }
    var quizScore = Math.round((numCorrect/questionsArr.length) * 100)

    alert ("You Scored "+ quizScore + "%")
    numCorrect = 0
}