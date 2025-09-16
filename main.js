function makeGrid() {
  const gridContainer = document.getElementById("grid-container");
  for (i = 0; i < 16; i++) {
    let square = document.createElement("div");
    square.className = "square";
    gridContainer.append(square);
  }
}

makeGrid();
