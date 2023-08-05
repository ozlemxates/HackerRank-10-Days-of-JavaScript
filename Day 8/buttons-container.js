let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");

function clickEvent() {
  let button1 = btn1.innerHTML;
  let button2 = btn2.innerHTML;
  let button3 = btn3.innerHTML;
  let button4 = btn4.innerHTML;
  let button6 = btn6.innerHTML;
  let button7 = btn7.innerHTML;
  let button8 = btn8.innerHTML;
  let button9 = btn9.innerHTML;
  btn1.innerHTML = button4;
  btn2.innerHTML = button1;
  btn3.innerHTML = button2;
  btn4.innerHTML = button7;
  btn6.innerHTML = button3;
  btn7.innerHTML = button8;
  btn8.innerHTML = button9;
  btn9.innerHTML = button6;
}