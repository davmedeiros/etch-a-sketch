main();

function main() {
  console.log(createGrid());
  paintSquare();
}

function createGrid(rowSize = 16) {
  const container = document.querySelector('#container');
  gridSize = rowSize ** 2;
  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
  return gridSize;
}

function paintSquare() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover', (e) => {
      e.target.classList.add('painted');
    });
  });
}
