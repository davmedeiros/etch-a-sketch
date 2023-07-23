function createNewCanvas(size) {
    const canvas = document.querySelector('#canvas');
    const numberOfCells = size * size;
    const cellSize = canvas.clientHeight / (size);

    for (let i = 0; i < numberOfCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        canvas.appendChild(cell);
    }
}

createNewCanvas(16);
