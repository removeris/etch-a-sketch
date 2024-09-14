function createGrid(){
    const container = document.querySelector("#container");

    console.log(container.getAttribute("width"));

    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            container.appendChild(gridCell);
        }
    }
}

function changeCellColor() {
    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseenter", () => {
            gridCell.classList.add("hover");
        })
    })
}

createGrid();
changeCellColor();