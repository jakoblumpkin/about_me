'use strict'

var correctA=0;

//intro question
let name=prompt("What's your name? : ")
alert("Hey "+name+" Welcome to my biography page.");

//1st Question
let firstQ=prompt(name+" Can I ask you a few questions? yes or no: ");
if (firstQ.toLowerCase()==="yes"){
    var correctA=correctA+1;
    alert("Thanks for your time. ");
}else if(firstQ.toLowerCase()==="no"){
    alert("I suggest you leave the page!");
}

//2nd Question
let secondQ=prompt("Is 'jacob' how I spell my first name: yes or no: ");
if (secondQ.toLowerCase()==="yes"){
    alert("No it's 'Jakob' ");
}else if(secondQ.toLowerCase()==="no"){
    var correctA=correctA+1;
    alert("Correct it's Jakob");
}


//3rd Question
let thirdQ=prompt("Did I go to College?: yes or no: ");
if (thirdQ.toLowerCase()==="yes"){
    alert("Nope I didn't. Nice try " +name);
}else if(thirdQ.toLowerCase()==="no"){
    var correctA=correctA+1;
    alert("Correct");
}


//4th Question
let fourthQ=prompt("Am I younger than 25 years old?: yes or no: ");
if (fourthQ.toLowerCase()==="yes"){
    var correctA=correctA+1;
    alert("Correct I'm 24 years old.");
}else if(fourthQ.toLowerCase()==="no"){
    alert("Nice try but I'm 24 years old.");
}


//5th Question
let fifthQ=prompt("Just to check if your paying attention. Is 'jacob' how I spell my first name?: yes or no: ");
if (fifthQ.toLowerCase()==="yes"){
    alert("No it's 'Jakob' ");
}else if(fifthQ.toLowerCase()==="no"){
    var correctA=correctA+1;
    alert("Correct it's Jakob");
}

alert("Thanks for your time ",name);


//6th Question
for(let i=0; i<6; i++){
    let answer=prompt("How old do you think I am?: ");
    if (answer==24){
        var correctA=correctA+1;
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

//7th Question
for(let i=0; i<6; i++){
    let answer=prompt("What is one of my favorite call of duties gmaes?");
    if(answer.toLowerCase()=="black ops" || answer.toLowerCase()=="modern warfare 2" || answer.toLowerCase()=="modern warfare"){
        correctA+=1;
        break;
    }
}
alert("All the options: black ops, modern warfare 2, modern warfare");


alert("You got "+ correctA +" right out of 7 questions.");



