`use strict`
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let randomNumber = Math.floor(Math.random() * 7) + 1;      
let guessCount = 1;
let resetButton;

function checkGuess() {
                const userGuess = Number(guessField.value);
                if (guessCount === 1) {
                    guesses.textContent = 'Previous guesses: ';
                }
                guesses.textContent += userGuess + ' ';
                if (userGuess === randomNumber) {
                    lastResult.textContent = 'Congratulations! You guessed it right!';
                    lastResult.style.backgroundColor = 'green';
                    lowOrHi.textContent = '';
                    setGameOver();
                } else if (guessCount === 5) {
                    lastResult.textContent = '!!! 😵 GAME OVER 😵!!!';
                    lowOrHi.textContent = '';
                    setGameOver();
                } else {
                    lastResult.textContent = '!!! 😑 Wrong 😑 !!!';
                    lastResult.style.backgroundColor = 'red';
                    if(userGuess < randomNumber) {
                    lowOrHi.textContent = 'Last guess was too low !' ;
                    } else if(userGuess > randomNumber) {
                        lowOrHi.textContent = 'Last guess was too high!';
                    }
                }
                guessCount++;
                guessField.value = '';
                guessField.focus();
            }
            guessSubmit.addEventListener('click', checkGuess);
            function setGameOver() {
                guessField.disabled = true;
                guessSubmit.disabled = true;
                resetButton = document.createElement('button');
                resetButton.style.backgroundColor ='blue';
                resetButton.textContent = 'Start new game';
                document.body.appendChild(resetButton);
                resetButton.addEventListener('click', resetGame);
            }
            function resetGame() {                
              guessCount = 1;
              const resetParas = document.querySelectorAll('.resultParas p');
              for (const resetPara of resetParas) {
                  resetPara.textContent = '';
              }
              resetButton.parentNode.removeChild(resetButton);
              guessField.disabled = false;
              guessSubmit.disabled = false;
              guessField.value = '';
              guessField.focus();              
              lastResult.style.backgroundColor = 'white';
              randomNumber = Math.floor(Math.random() * 7) + 1;
            }