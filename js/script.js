main();

function main() {
  console.log(createGrid());
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
