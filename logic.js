function createGrid(gridSize){
    const container = document.querySelector("#container");

    let gridCellSize = Math.floor(container.offsetHeight / gridSize) - 2;

    console.log(gridCellSize);

    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.style.width = gridCellSize + "px";
            gridCell.style.height = gridCellSize + "px";
            container.appendChild(gridCell);
        }
    }

    changeCellColor();
}

function changeCellColor() {
    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseenter", () => {
            gridCell.style.backgroundColor = randomizeColor();
        })
    })
}

function randomizeColor(){
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;

    const color = `rgb(${red},${green},${blue})`;

    return color;
}

function createNewGrid() {
    const button = document.querySelector("#new-grid");

    button.addEventListener("click", () => {
        removeCurrentGrid();

        do{
            newGridSize = parseInt(prompt("Enter how many blocks should be in a single row", "0"));
        } while(newGridSize > 100 || !Number(newGridSize) || newGridSize < 0);

        createGrid(newGridSize);
        changeCellColor();
    })
}

function removeCurrentGrid() {
    const container = document.querySelector("#container");

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

createGrid(16);
createNewGrid();
