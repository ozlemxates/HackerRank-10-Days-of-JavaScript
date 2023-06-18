let btn = 0;
let btnDOM = document.querySelector("#btn")
btnDOM.addEventListener("click", clickEvent)

btnDOM.innerHTML = btn

function clickEvent() {
    console.log(this.id)
    if (this.id == "btn") {
        btnDOM.innerHTML = btn += 1
    }

}