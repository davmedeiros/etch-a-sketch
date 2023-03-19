main();

function main() {
  createGrid();
  startNewSketch();
}

function createGrid(rowSize = 16) {
  const container = document.querySelector('#container');
  gridSize = rowSize ** 2;
  squareSize = container.offsetWidth / rowSize;
  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
  paintSquare();
  return gridSize;
}

function paintSquare() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover', (e) => {
      randomRed = Math.random() * 255;
      randomGreen = Math.random() * 255;
      randomBlue = Math.random() * 255;
      e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    });
  });
}

function startNewSketch() {
  const button = document.querySelector('#new-sketch');
  button.addEventListener('click', (e) => {
    input = parseInt(prompt('Enter grid size'));
    if (!Number.isInteger(input) || input > 100) {
      alert('Invalid: Enter an integer lower than 100');
      return 1;
    }
    removeGrid();
    createGrid(input);
  });
}

function removeGrid() {
  const grid = document.querySelectorAll('.square');
  grid.forEach(square => {
    square.remove();
  });
}
