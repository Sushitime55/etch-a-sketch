function makeGrid(squaresPerColumn = 4) {
  const gridContainer = document.getElementById("grid-container");
  // remove existing elements, if any
  removeChildElements(gridContainer);

  for (i = 0; i < squaresPerColumn; i++) {
    let column = document.createElement("div");
    column.className = "column";
    for (j = 0; j < squaresPerColumn; j++) {
      let square = document.createElement("div");
      square.className = "square";
      column.appendChild(square);
    }
    gridContainer.appendChild(column);
  }

  addMouseoverToSquares();
}

function removeChildElements(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }
}

function onHover(square) {
  // reroll pure white
  let randomRed = 255;
  let randomGreen = 255;
  let randomBlue = 255;
  while (randomRed == 255 && randomGreen == 255 && randomBlue == 255) {
    randomRed = getRandomRGBValue();
    randomGreen = getRandomRGBValue();
    randomBlue = getRandomRGBValue();
  }
  square.style.backgroundColor = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
}

function makeCustomGrid() {
  let squaresPerColumn = prompt("How many squares would you like on each column? Max 100.");

  while (
    squaresPerColumn != null &&
    (!Number.isInteger(parseInt(squaresPerColumn)) ||
      parseInt(squaresPerColumn) < 1 ||
      parseInt(squaresPerColumn) > 100)
  ) {
    squaresPerColumn = prompt("Invalid answer. Please input an integer between 1 and 100.");
  }

  if (squaresPerColumn != null) {
    makeGrid(squaresPerColumn);
  }
}

function addMouseoverToSquares() {
  const squares = document.querySelectorAll("div.square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", onHover.bind(event, square));
  });
}

function getRandomRGBValue() {
  return Math.floor(Math.random() * 256);
}

const makeGridButton = document.querySelector("button.make-grid-button");
makeGridButton.addEventListener("click", makeCustomGrid);

makeGrid();
