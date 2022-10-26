const grid = {

  /**
   * Méthode pour changer la couleur du pixel
   * @param {*} event 
   */
  handleClick: function(event) {
    // dans l'objet event je trouve une propriété target correspondant à l'élement qui a déclenché l'événement cad ici l'Element cliqué
    const clickedCell = event.target;
    // si la condition renvoi true
    if (clickedCell.classList.contains('cell--light')) {
      // On change de class
      clickedCell.classList.remove('cell--light');
      clickedCell.classList.add('cell--dark');
    }
    else {
      // sinon l'inverse
      clickedCell.classList.remove('cell--dark');
      clickedCell.classList.add('cell--light');
    }
  },

  /**
   * Méthode pour générer un grille
   * @param {*} size 
   */
  generate: function (size) {
    // cibler l'ardoise de jeu
    const gameElement = document.querySelector('#invader');
    // j'efface déjà l'existant
    gameElement.innerHTML = '';

    // je répète 8 fois
    for (let counterRow = 0; counterRow < size; counterRow++) {
      // créer une ligne
      const rowElement = document.createElement('div');
      rowElement.className = 'row';
      gameElement.appendChild(rowElement);

      // je répète 8 fois
      for (let counterCell = 0; counterCell < size; counterCell++) {
        // créer une case
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        // j'appel ma méthode handleClick sur l'écoute d'un click d'un cellElement
        cellElement.addEventListener('click', grid.handleClick);
        rowElement.appendChild(cellElement);
      }
    }
  }
};
