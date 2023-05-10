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
let score = 1;
function divInGray() {
    if (previousDivMole) {
        previousDivMole.style.backgroundColor = "rgb(125, 75, 10)";
        previousDivMole.style.boxShadow =
            "10px 10px 5px 0px rgba(0,0,0,0.5) inset";
        previousDivMole.style.backgroundImage = "none";
        previousDivMole.style.border = "2px solid black";
    }
    let randNum = Math.floor(Math.random() * tab.length);
    let divMole = document.getElementById(`${randNum}`);
    // divMole.style.backgroundColor = "gray";
    divMole.style.backgroundImage =
        "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F13%2FExpression-Cartoon-Eyes-PNG-Background-Image.png&f=1&nofb=1&ipt=fd9ea1ab271147a517b6f6c89472205279c558bfd3f91d0902323d30aaffaed2&ipo=images)";
    divMole.style.backgroundRepeat = "no-repeat";
    divMole.style.backgroundSize = "contain";
    divMole.style.background = "scale(0.5)";
    divMole.style.backgroundColor = "rgb(95, 95, 95)";
    divMole.style.backgroundPosition = "center";
    divMole.style.boxShadow = "10px 10px 5px 0px rgba(0,0,0,0.5)";
    divMole.style.border = "2px solid grey";
    console.log(divMole);
    previousDivMole = divMole;
    upMole = randNum;
    function clickMole() {
        if (upMole === randNum) {
            divScore.textContent = score;
            score++;
        } else console.log("sorry");
    }
    divMole.addEventListener("click", clickMole, { once: true });
}
let timerId = setInterval(divInGray, 500);
