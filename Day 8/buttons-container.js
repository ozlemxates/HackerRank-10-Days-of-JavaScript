let btn1 = 1;
let btn2 = 2;
let btn3 = 3;
let btn4 = 4;
let btn5 = 5;
let btn6 = 6;
let btn7 = 7;
let btn8 = 8;
let btn9 = 9;


let buttons = document.querySelectorAll(".btn")
let btn1DOM = document.querySelector("#btn1")
let btn2DOM = document.querySelector("#btn2")
let btn3DOM = document.querySelector("#btn3")
let btn4DOM = document.querySelector("#btn4")
let btn5DOM = document.querySelector("#btn5")
let btn6DOM = document.querySelector("#btn6")
let btn7DOM = document.querySelector("#btn7")
let btn8DOM = document.querySelector("#btn8")
let btn9DOM = document.querySelector("#btn9")

btn5DOM.addEventListener("click", clickEvent)


btn1DOM.innerHTML = btn1
btn2DOM.innerHTML = btn2
btn3DOM.innerHTML = btn3
btn4DOM.innerHTML = btn4
btn5DOM.innerHTML = btn5
btn6DOM.innerHTML = btn6
btn7DOM.innerHTML = btn7
btn8DOM.innerHTML = btn8
btn9DOM.innerHTML = btn9

let clickCount = 0; 

function clickEvent() {
  if (this.id === "btn5") {
    clickCount++; 
    if (clickCount === 1) {
      handleFirstClick();
    } else if (clickCount === 2) {
      handleSecondClick();
    }
  }
}

function handleFirstClick() {
  btn1DOM.innerHTML = btn1 + 3;
  btn2DOM.innerHTML = btn2 - 1;
  btn3DOM.innerHTML = btn3 - 1;
  btn4DOM.innerHTML = btn4 + 3;
  btn6DOM.innerHTML = btn6 - 3;
  btn7DOM.innerHTML = btn7 + 1;
  btn8DOM.innerHTML = btn8 + 1;
  btn9DOM.innerHTML = btn9 - 3;
}

function handleSecondClick() {
    btn1DOM.innerHTML = btn1 + 6;
    btn2DOM.innerHTML = btn2 + 2;
    btn3DOM.innerHTML = btn3 - 2;
    btn4DOM.innerHTML = btn4 + 4;
    btn6DOM.innerHTML = btn6 - 4;
    btn7DOM.innerHTML = btn7 + 2;
    btn8DOM.innerHTML = btn8 - 2;
    btn9DOM.innerHTML = btn9 - 6; 
}
