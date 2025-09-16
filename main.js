function makeGrid(squaresPerRow = 4) {
  const gridContainer = document.getElementById("grid-container");
  // remove existing elements, if any
  removeChildElements(gridContainer);

  for (i = 0; i < squaresPerRow ** 2; i++) {
    let square = document.createElement("div");
    square.className = "square";
    gridContainer.append(square);
  }

  addMouseoverToSquares();
}

function removeChildElements(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }
}

function onHover(square) {
  square.style.backgroundColor = "blue";
}

function makeCustomGrid() {
  let squaresPerRow = prompt("How many squares would you like on each row? ex. 5 = 5x5 grid");
  makeGrid(squaresPerRow);
}

function addMouseoverToSquares() {
  const squares = document.querySelectorAll("div.square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", onHover.bind(event, square));
  });
}

const makeGridButton = document.querySelector("button.make-grid-button");
makeGridButton.addEventListener("click", makeCustomGrid);

makeGrid();
