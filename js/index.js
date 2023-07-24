function deleteCanvas() {
    const grid = document.querySelectorAll('#canvas .cell');
    grid.forEach(cell => {
        cell.remove();
    });
}

function createNewCanvas(size) {
    deleteCanvas();
    const canvas = document.querySelector('#canvas');
    const numberOfCells = size * size;
    const cellSize = canvas.clientHeight / (size);

    for (let i = 0; i < numberOfCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        cell.addEventListener("dragstart", (e) => {
            e.preventDefault();
        })
        cell.addEventListener('mousedown', () => {
            cell.classList.add('painted');
        })
        cell.addEventListener('mouseover', (e) => {
            if (e.buttons === 1) {
                cell.classList.add('painted');
            }
        })
        canvas.appendChild(cell);
    }
}

createNewCanvas(16);
