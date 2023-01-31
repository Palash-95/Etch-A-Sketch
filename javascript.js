const container = document.querySelector(".container");

function makeGrid(boxesPerSide){
    for(let i = 0; i < (boxesPerSide*boxesPerSide); i++){
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    let boxSize = 800/boxesPerSide;
    box.style.border = "1px solid black";
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "purple";

    })

    container.appendChild(box);
}
}
makeGrid(16);

const btn = document.querySelector("button");
btn.onclick = () => {
    let inputNumber = prompt("Enter the number of sqares per side", "16");
    let newInputNumber = Math.ceil(inputNumber) ;
    if(newInputNumber && newInputNumber < 100){
        container.innerHTML = "";
        makeGrid(newInputNumber);
   }
}
