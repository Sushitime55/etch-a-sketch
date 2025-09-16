function makeGrid() {
  const gridContainer = document.getElementById("grid-container");
  for (i = 0; i < 16; i++) {
    let square = document.createElement("div");
    square.className = "square";
    gridContainer.append(square);
  }
}

function onHover(square) {
  square.style.backgroundColor = "blue";
  console.log("hoover");
}

// makeGrid() has to come before event listeners are made
// otherwise query selector won't have any div.square's to grab
makeGrid();

const squares = document.querySelectorAll("div.square");
squares.forEach((square) => {
  square.addEventListener("mouseover", onHover.bind(event, square));
  console.log("yep");
});
