/*console.log(document.querySelector('.message').textContent);//.(dot) because meassage is a class if it is id we would have used #
console.log(document.querySelector('.message').textContent='correct guess')*/


'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  //when user wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Guess';
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem'
    document.querySelector('.number').textContent = secretNumber;
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent = highscore;
    }
    
  }

  //when guess is not equal to secretNumber 
  else if(guess!==secretNumber){
    if(score>1){
      document.querySelector('.message').textContent=guess>secretNumber ? '📈 To High':'📉 To Low';
      score--;
      document.querySelector('.score').textContent=score;
    }
    else{
      document.querySelector('.message').textContent = '☹ You Lose The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too high
  /*else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 To High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹ You Lose The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 To Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose The Game';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

//reset the game
document.querySelector('.again').addEventListener('click',function(){
document.querySelector('.message').textContent='start guessing...';
score=20;
document.querySelector('.score').textContent=score;
secretNumber=Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
document.querySelector('.guess').value='';
document.querySelector('.number').textContent='?'
document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.number').style.width='15rem';
});
