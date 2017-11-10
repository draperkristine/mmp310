function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;
    
    if(question 1 == 50){
        correct++;
    }
    if(question 2 == "Tom"){
        correct++;
    }
    if(question 3 == "They don't know either"){
        correct++;
    }
    if(question 4 == "Feb 15"){
        correct++;
    }
    var messages = ["Great Job", "You Suck", "Really"];
    var score;
     
    if(correct == 0){
        score = 1;
    }
    if(correct == 0 && correct < 3){
        score = 2;
    }
    if(correct == 0){
        score = 1;
    }
    if(correct == 4){
        score = 0;
    }
   
    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
   