const calculateBtn = document.getElementById('calculate-btn');
const clearBtn = document.getElementById('clear-btn');
const multiplierAsPercent = document.getElementsByClassName('multiplier-as-percentage');
let multiplierAsDecimal = .10;


function Calculate() {
  let startValue = document.getElementById("starting-number").valueAsNumber;
  const repeatAmount = document.getElementById("repeat-amount").valueAsNumber;
  const answerBlock = document.getElementById("answer");

  let tempHoldArray = [];


  for (let i = 0; i < repeatAmount; i++) {
    let takeTen = startValue * multiplierAsDecimal;
    startValue = startValue + takeTen;
    tempHoldArray.push(startValue);

  }

  let k = tempHoldArray.length - 1;
  answerBlock.innerHTML = Math.round((tempHoldArray[k] + Number.EPSILON) * 100) / 100;

  console.log(tempHoldArray);
}

function Clear() {
  location.reload();
}

calculateBtn.addEventListener("click", Calculate);
clearBtn.addEventListener("click", Clear);

function themeChanger() {
  const calculatorPanel = document.getElementById('calculator-panel');
  const twentyTheme = document.getElementById('twenty-theme-radio');
  const fiftyTheme = document.getElementById('fifty-theme-radio');
  
  if (twentyTheme.checked === true) {
    calculatorPanel.removeAttribute('class');
    calculatorPanel.classList.add('twenty-theme');
    multiplierAsDecimal = .20;
    for (i = 0; i < multiplierAsPercent.length; i++) {
      multiplierAsPercent[i].innerHTML = "20";
    }

  } else if (fiftyTheme.checked === true) {
    calculatorPanel.removeAttribute('class');
    calculatorPanel.classList.add('fifty-theme');
    multiplierAsDecimal = .50;
    for (i = 0; i < multiplierAsPercent.length; i++) {
      multiplierAsPercent[i].innerHTML = "50";
    }

  }
    else {
    calculatorPanel.removeAttribute('class');
    calculatorPanel.classList.add('ten-theme');
    multiplierAsDecimal = .10;
    for (i = 0; i < multiplierAsPercent.length; i++) {
      multiplierAsPercent[i].innerHTML = "10";
    }
  }
}

themeChanger()