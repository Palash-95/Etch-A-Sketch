const container = document.querySelector(".container");

makeGrid(16);

function makeGrid(boxesPerSide){
    for(let i = 0; i < (boxesPerSide**2); i++){
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    let boxSize = 800/boxesPerSide;
    box.style.border = "1px solid black";
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    let alpha = 1;
    box.addEventListener("mouseover", (e) => {        
         let r = Math.floor(Math.random()*256);
         let g = Math.floor(Math.random()*256);
         let b = Math.floor(Math.random()*256);
         e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${alpha})` ;
         alpha -= 0.1;
    })

    container.appendChild(box);
}
}


const btn = document.querySelector("button");
btn.onclick = () => {
    let inputNumber = prompt("Enter the number of sqares per side", "16");
    let newInputNumber = Math.ceil(inputNumber) ;
    if(newInputNumber && newInputNumber < 100){
        container.innerHTML = "";
        makeGrid(newInputNumber);
   }
}
