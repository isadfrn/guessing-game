const container = document.getElementById('container');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const buttons = document.getElementById('buttons');
const typedNumberInput = document.getElementById('typed');
const tryButton = document.getElementById('try');

const tryAgainButton = document.createElement('button');
tryAgainButton.textContent = 'Try again';
tryAgainButton.addEventListener('click', reload);

const numberToBeGuessed = Math.floor(Math.random() * 10);

let guessCount = 0;

function reload() {
  window.location.reload();
}

function tryGuessingTheNumber() {
  const typedNumber = Number(typedNumberInput.value);

  if (typedNumber === numberToBeGuessed) {
    title.textContent = `Got it right in ${guessCount} tries`;
    container.removeChild(subtitle);
    buttons.removeChild(typedNumberInput);
    buttons.removeChild(tryButton);
    buttons.appendChild(tryAgainButton);
  } else {
    guessCount++;
  }
}

tryButton.addEventListener('click', tryGuessingTheNumber);
