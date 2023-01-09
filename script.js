const containerElement = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerElement = document.createElement("div");
    colorContainerElement.classList.add("color-container");
    containerElement.appendChild(colorContainerElement);
}

const colorContainerElement = document.querySelectorAll(".color-container");
// console.log(colorContainerElement);

generateColor();

function generateColor() {
    colorContainerElement.forEach((colorContainerElement) => {
        const newColorCode = randomColorGen();

        colorContainerElement.style.backgroundColor = "#" + newColorCode;
        colorContainerElement.innerText = "#" + newColorCode;
    })
}



function randomColorGen() {
    const chars = "0123456789abcdef"; // 15 elements
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);

        colorCode += chars.substring(randomNum, randomNum + 1);
        // console.log(colorCode);
    }
    return colorCode;
}