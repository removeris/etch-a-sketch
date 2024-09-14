function createGrid(gridSize){
    const container = document.querySelector("#container");

    let gridCellSize = Math.round(container.offsetHeight / gridSize);

    console.log(gridCellSize);

    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.style.width = gridCellSize + "px";
            gridCell.style.height = gridCellSize + "px";
            gridCell.style.backgroundColor = "white";
            container.appendChild(gridCell);
        }
    }

    changeCellColor();
}

function changeCellColor() {
    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseenter", () => {
            if(gridCell.style.backgroundColor == "white"){
                gridCell.style.backgroundColor = randomizeColor();
                gridCell.style.opacity = 0.1;
            }
            else if(gridCell.style.opacity < 1){
                const currentOpacity = Number(gridCell.style.opacity);
                gridCell.style.opacity = currentOpacity + 0.1;
                return;
            }
  
        })
    })
}

function randomizeColor(){
    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;



    const color = `rgba(${red},${green},${blue})`;

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
