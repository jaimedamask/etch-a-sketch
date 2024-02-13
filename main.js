const input = Number(prompt('Choose a number between 1 and 100'));
let totalSquares = Math.pow(input,2);
const container = document.getElementById('grid-container');
const containerWidth = container.offsetWidth;

if (input > 0 && input < 100) {
    makeGrid();
} else alert('Please refresh the page and choose a number between 1 and 100');

function makeGrid() {
    const sideLength =  Math.round(containerWidth / input);
    const sideLengthStr = sideLength + 'px';

    for (let i = 0; i < totalSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
        gridSquare.style.width = sideLengthStr;
        gridSquare.style.height = sideLengthStr;
        container.appendChild(gridSquare);
        console.log(sideLengthStr);
    }
    const fullWidth = sideLength * input;
    const fullWidthStr = fullWidth + 'px';
    container.style.width = fullWidthStr;
}

document.querySelectorAll('.square').forEach(item => {
    item.addEventListener('mouseenter', darkenSquare => {
        item.style.backgroundColor = '#000';
    })
})