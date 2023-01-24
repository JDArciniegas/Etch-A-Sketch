// variables
const grid = document.querySelector('#grid');
const gridNumber = document.querySelector('#grid-number');
const clearGridButton = document.querySelector('#clearGrid');
const gridValueLabel = document.querySelector('#grid-value-label');
const colorPicker = document.querySelector('#square-colors');


// create a webpage with a 16 * 16 grid or div squares
function createGrid(gridNumber) {
  // take a number parameter
  grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

  for (var i = 0; i < gridNumber * gridNumber; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
  }

  const gridSquares = grid.querySelectorAll('div');
  gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = `${colorPicker.value}`;
    })
  })
  displayGridSize(gridNumber);
}

// // once input is changed, it should first reset to 0
function resetGrid() {
  grid.innerHTML = '';
}

// create display grid size
function displayGridSize(gridNumber) {
  if (gridNumber != 0) {
    gridValueLabel.textContent = `Grid: ${gridNumber} * ${gridNumber}`
  } else {
    gridValueLabel.textContent = 'Grid: 0 * 0'
  }
}

// use input value to adjust grid
gridNumber.addEventListener('change', (e) => {
  resetGrid()
  createGrid(gridNumber.value);
  displayGridSize(gridNumber.value)
})

// add clear button
clearGridButton.addEventListener('click', () => {
  resetGrid();
});

createGrid(50);
