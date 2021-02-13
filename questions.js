'use strict'

var correctA=0;

//intro question
var userName=prompt("What's your name? : ");
alert("Hey " + userName + " Welcome to my biography page.");


//1st Question 'Asking can I ask a few questions ?'
function firstQuestion(){
    let firstQ=prompt(userName +" Can I ask you a few questions? yes or no: ");
    if (firstQ.toLowerCase()==="yes"){
        correctA++;
        alert("Thanks for your time. ");
    }else if(firstQ.toLowerCase()==="no"){
        alert("I suggest you leave the page!");
    }
}
firstQuestion();

//2nd Question 'Is 'jacob' how I spell my first name'
function secondQuestion(){
    let spellingAnswer=prompt("Is 'jacob' how I spell my first name: ");
    if (spellingAnswer.toLowerCase()==="yes"){
        alert("No it's 'Jakob' ");
    }else if(spellingAnswer.toLowerCase()==="no"){
        correctA++;
        alert("Correct it's Jakob");
    }
}
secondQuestion();

//3rd Question 'Did I go to College?'
function thirdQuestion(){
    let thirdQ=prompt("Did I go to College?: yes or no: ");
    if (thirdQ.toLowerCase()==="yes"){
        alert("Nope I didn't. Nice try " +userName);
    }else if(thirdQ.toLowerCase()==="no"){
        correctA++;
        alert("Correct");
    }
}
thirdQuestion();


//4th Question 'Am I younger than 25 years old?'
function fourthQuestion(){
    let fourthQ=prompt("Am I younger than 25 years old?: yes or no: ");
    if (fourthQ.toLowerCase()==="yes"){
        correctA++;
        alert("Correct I'm 24 years old.");
    }else if(fourthQ.toLowerCase()==="no"){
        alert("Nice try but I'm 24 years old.");
    }
}
fourthQuestion();

//5th Question 'Is 'jacob' how I spell my first name?'
function fifthQuestion(){
    let fifthQ=prompt("Just to check if your paying attention. Is 'jacob' how I spell my first name?: yes or no: ");
    if (fifthQ.toLowerCase()==="yes"){
        alert("No it's 'Jakob' ");
    }else if(fifthQ.toLowerCase()==="no"){
        correctA++;
        alert("Correct it's Jakob");
    }

    alert("Thanks for your time ",userName);
}
fifthQuestion();

//6th Question '"How old do you think I am?'
function sixthQuestion(){
    for(let i=0; i<6; i++){
        let answer=prompt("How old do you think I am?: ");
        if (answer==24){
            correctA++;
            break;
        }
        else if(answer<24){
            alert("Too Low!")
        }
        else if(answer>24){
            alert("Too High!")
        }
        else if(i==5){
            alert("I am 24 years old!")
        }
    }
}
sixthQuestion();

//7th Question
function seventhQuestion(){
    for(let i=0; i<6; i++){
        let answer=prompt("What is one of my favorite call of duties games?");
        if(answer.toLowerCase()=="black ops" || answer.toLowerCase()=="modern warfare 2" || answer.toLowerCase()=="modern warfare"){
            correctA++;
            break;
        }
    }
    alert("All the options: black ops, modern warfare 2, modern warfare");


    alert("You got "+ correctA +" right out of 7 questions.");
}
seventhQuestion();

