const calculateBtn = document.getElementById('calculate-btn');
const clearBtn = document.getElementById('clear-btn');

function Calculate() {
  let startValue = document.getElementById("starting-number").valueAsNumber;
  const repeatAmount = document.getElementById("repeat-amount").valueAsNumber;
  const answerBlock = document.getElementById("answer");

  let tempHoldArray = [];


  for (let i = 0; i < repeatAmount; i++) {
    let takeTen = startValue * .10;
    startValue = startValue + takeTen;
    tempHoldArray.push(startValue);

  }

  let k = tempHoldArray.length - 1;
  answerBlock.innerHTML = tempHoldArray[k];

  console.log(tempHoldArray);
}

function Clear() {
  location.reload();
}

calculateBtn.addEventListener("click", Calculate);
clearBtn.addEventListener("click", Clear);