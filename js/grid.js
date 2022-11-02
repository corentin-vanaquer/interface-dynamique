const grid = {

  /**
   * Method to change the pixel color
   * @param {*} event 
   */
  handleClick: function(event) {
    // event.target allow me to know which element created an event
    const clickedCell = event.target;
    // if true
    if (clickedCell.classList.contains('cell--light')) {
      // change our class
      clickedCell.classList.remove('cell--light');
      clickedCell.classList.add('cell--dark');
    }
    else {
      // otherwise, the opposite
      clickedCell.classList.remove('cell--dark');
      clickedCell.classList.add('cell--light');
    }
  },

  /**
   * Method to generate a grid
   * @param {*} size 
   */
  generate: function (size) {
    // handle the grid
    const gameElement = document.querySelector('#invader');
    // erase the existant
    gameElement.innerHTML = '';

    // loop 8 times
    for (let counterRow = 0; counterRow < size; counterRow++) {
      // create a lign
      const rowElement = document.createElement('div');
      rowElement.className = 'row';
      gameElement.appendChild(rowElement);

      // loop 8 times
      for (let counterCell = 0; counterCell < size; counterCell++) {
        // create boxes
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        // I call my method handleClick on a event listener
        cellElement.addEventListener('click', grid.handleClick);
        rowElement.appendChild(cellElement);
      }
    }
  }
};
