const main = document.getElementById("main");
const sectionMole = document.getElementById("sectionMole");
let divScore = document.getElementById("score");
let div = sectionMole.firstElementChild;
let tab = new Array();

/* Input id in an array */
while (div) {
    tab.push(div.id);
    div = div.nextElementSibling;
}

console.log(tab);

/* Program */
let previousDivMole;
let upMole;
let score = 0;
function divInGray() {
    if (previousDivMole) {
        previousDivMole.style.backgroundColor = "white";
    }
    let randNum = Math.floor(Math.random() * tab.length);
    let divMole = document.getElementById(`${randNum}`);
    divMole.style.backgroundColor = "gray";
    console.log(divMole);
    previousDivMole = divMole;
    upMole = randNum;
    function clickMole() {
        if (upMole === randNum) {
            score++;
            divScore.textContent = score;
        } else console.log("sorry");
    }
    divMole.addEventListener("click", clickMole, { once: true });
}
let timerId = setInterval(divInGray, 600);
