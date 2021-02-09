'use strict'

let name=prompt("What's your name? : ")
alert("Hey "+name+" Welcome to my biography page.");

let firstQ=prompt(name+" Can I ask you a few questions? yes or no: ");
if (firstQ.toLowerCase()==="yes"){
    alert("Thanks for your time. ");
}else if(firstQ.toLowerCase()==="no"){
    alert("I suggest you leave the page!");
}

let secondQ=prompt("Is 'jacob' how I spell my first name: yes or no: ");
if (secondQ.toLowerCase()==="yes"){
    alert("No it's 'Jakob' ");
}else if(secondQ.toLowerCase()==="no"){
    alert("Correct it's Jakob");
}

let thirdQ=prompt("Did I go to College?: yes or no: ");
if (thirdQ.toLowerCase()==="yes"){
    alert("Nope I didn't. Nice try " +name);
}else if(thirdQ.toLowerCase()==="no"){
    alert("Correct");
}

let fourthQ=prompt("Am I younger than 25 years old?: yes or no: ");
if (fourthQ.toLowerCase()==="yes"){
    alert("Correct I'm 24 years old.");
}else if(fourthQ.toLowerCase()==="no"){
    alert("Nice try but I'm 24 years old.");
}

let fifthQ=prompt("Just to check if your paying attention. Is 'jacob' how I spell my first name?: yes or no: ");
if (fifthQ.toLowerCase()==="yes"){
    alert("No it's 'Jakob' ");
}else if(fifthQ.toLowerCase()==="no"){
    alert("Correct it's Jakob");
}

alert("Thanks for your time ",name);