'use strict';
let guessNumber=Math.trunc(Math.random()*20)+1;
//console.log(guessNumber);
//REFACTORED FUNCTION OF THE CODE FOR DECREASING THE SCORE ON EACH WRONG GUESS.
let scoreLessThanZero=function(score){
    score--;
  document.querySelector('.score').textContent=score;
     if(score<1){
         document.querySelector('.message').textContent='You lost the game!, Try Again'
         document.querySelector('.score').textContent=0;
}
}
//REFACTORED FUNCTION FOR DISPLAYING THE MESSAGE ON THE LABEL
let displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}
//WHEN THE USER WANTS TO COMPARE THE NUMBER ENTERED
document.querySelector('.check').addEventListener('click',function(){
//console.log('Hello world');
let numberGuessed=Number(document.querySelector('.guess').value);
let score=document.querySelector('.score').textContent;
//console.log(score)
;//console.log(numberGuessed);
//IF ENTERED VALUE IS ZERO
if(!numberGuessed){
    document.querySelector('.message').textContent='Number value should be greater than 0'
score--;
document.querySelector('.score').textContent=score;
//IF THE VALUE IS SCORE IS LESS THAN 1
if(score<1){
    document.querySelector('.message').textContent='You lost the game!, Try Again'
    document.querySelector('.score').textContent=0
}
}
else if(numberGuessed !==guessNumber){
numberGuessed>guessNumber?displayMessage('Number is greater,choose smaller'):displayMessage('Number is smaller,choose greater');
scoreLessThanZero(score);
}
// let scoreLessThanZero=function(){
//     score--;
//   document.querySelector('.score').textContent=score;
//      if(score<1){
//          document.querySelector('.message').textContent='You lost the game!, Try Again'
//          document.querySelector('.score').textContent=0;
// }
//IF THE NUMBER GUESSED IS GREATER THAN THE RANDOM NUMBER
// else if(numberGuessed>guessNumber){
//     document.querySelector('.message').textContent='Number is greater,choose smaller'
//     score--;
//     document.querySelector('.score').textContent=score;
//     if(score<1){
//         document.querySelector('.message').textContent='You lost the game!, Try Again'
//         document.querySelector('.score').textContent=0;

//     }

// }
// //IF THE NUMBER GUESSED IS LESS THAN THE RANDOM NUMBER
// else if(numberGuessed<guessNumber){
//     document.querySelector('.message').textContent='Number is smaller,choose greater'
//     score--;
//     document.querySelector('.score').textContent=score;
//     if(score<1){
//         document.querySelector('.message').textContent='You lost the game!, Try Again'
//         document.querySelector('.score').textContent=0;
        
//     }
// }
//IF THE NUMBER GUESSED IS EQUAL TO THE RANDOM NUMBER
else if(numberGuessed===guessNumber){
    document.querySelector('.number').textContent=guessNumber;
    displayMessage('Hurray!,Guessed the correct Number');
    document.querySelector('body').style.backgroundColor='#60b347';
document.querySelector('.number').style.width='25rem';
let highScore=document.querySelector('.highscore').textContent;
if(score>highScore){
    document.querySelector('.highscore').textContent=score;
}
}
// else if(numberGuessed===guessNumber){ 
//     document.querySelector('.number').textContent=guessNumber;
//     document.querySelector('.message').textContent="ay! Guessed the corHurrrect number"
// document.querySelector('body').style.backgroundColor='#60b347';
// document.querySelector('.number').style.width='25rem';
// let highScore=document.querySelector('.highscore').textContent;
// if(score>highScore){
//     document.querySelector('.highscore').textContent=score;
// }
// }
})
//WHEN THE USER CLICKS THE AGAIN BUTTON
document.querySelector('.again').addEventListener('click',function(){
    guessNumber=Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent='Start guessing...'
    displayMessage('Start guessing....')
    document.querySelector('.score').textContent=20;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})
