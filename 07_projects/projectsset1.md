# Solution of project 1
## MEri progress
[CLICK HERE](https://stackblitz.com/edit/dom-project-chaiaurcode-whb4oe?file=1-colorChanger%2Fchaiaurcode.js)

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      default:
      //code
    }
  });
});

```
## Solution of Project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.6){
      results.innerHTML = `${bmi}, machis ki tilli!!!😒`
    }else if(bmi>=24.9){
      results.innerHTML = `${bmi}, saale mote!!!😮`
    }else{
      results.innerHTML = `${bmi}, hae model banega k!!!`
    }

  }
});

```
## Solution of Project 3
```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);



```

## project 4 Solution
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number greater than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over . Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},    `;
  numGuess++;
  remaining.innerHTML = `${12 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute(`disabled`, '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${12 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


```


## Project 5 Solution 

```javascript
console.log('Project 5');
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
    <div class = 'color'>
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " "? "Space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>     
    </div>
  `;
})

```

## project 6 Solution
```javascript
let intervalId;
const chnColor = function () {
  const color = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += color[Math.floor(Math.random() * 16)];
  }
  return hex;
};
console.log(chnColor());

intervalId = setInterval(function () {
  const body = document.querySelector('body');
  body.style.backgroundColor = chnColor();
}, 1000);

document.querySelector('#start').addEventListener('click', function () {
  if (!intervalId) {
    intervalId = setInterval(function () {
      const body = document.querySelector('body');
      body.style.backgroundColor = chnColor();
      console.log('ganpat baja');
    }, 1000);
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null;
  console.log('Ganpat rukgaya');
});



```