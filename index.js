let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  losses: 0,
  tie: 0 
}

updateScoreElem();


function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if ( randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if ( randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if ( randomNumber >= 2/3 && randomNumber < 1 ) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function showResult(myMove) {

  let computerMove = pickComputerMove();

  let result = '';

  if (myMove === 'scissors') {
    if (computerMove === 'rock') {
    result = 'LOST';
    score.losses += 1;
    } else if (computerMove === 'paper') {
      result = 'WIN';
      score.win += 1;
    } else if (computerMove === 'scissors') {
      result = 'TIE';
      score.tie += 1;
    }

  } else if (myMove === 'paper') {
      if (computerMove === 'rock') {
      result = 'WIN';
      score.win += 1;
      } else if (computerMove === 'paper') {
        result = 'TIE';
        score.tie += 1;
      } else if (computerMove === 'scissors') {
        result = 'LOST';
        score.losses += 1;
      }

  } else if (myMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'TIE';
        score.tie += 1;
      } else if (computerMove === 'paper') {
        result = 'LOST';
        score.losses += 1;
      } else if (computerMove === 'scissors') {
        result = 'WIN';
        score.win += 1;
      }
      
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElem();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `Computer made ${computerMove}`;


}

function updateScoreElem() {
  document.querySelector('.youScore')
    .innerHTML = score.win ;

  document.querySelector('.botScore')
  .innerHTML = score.losses ;
}
