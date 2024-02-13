for (let i = 0; i < 256; i++){
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('square');
    document.getElementById('grid-container').appendChild(gridSquare);
}