const form = {
  create: function() {
    // target parent
    form.element = document.querySelector('.configuration');
  // create element
    form.inputElement = document.createElement('input');
    // configured
    form.inputElement.placeholder = 'Taille de la grille';
    // aria-label for screen reader
    form.inputElement.setAttribute('aria-label', 'Taille de la grille');
    form.inputElement.className = 'configuration-input';
    form.inputElement.type = 'number';
    // insert in parent
    form.element.appendChild(form.inputElement);

    // create second element
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Valider';
    buttonElement.type = 'submit';
    buttonElement.className = 'configuration-button';
    form.element.appendChild(buttonElement);

    // call "handleSubmit" when submit form
    form.element.addEventListener('submit', form.handleSubmit);

    form.togglerElement = document.getElementById('toggler');
    // hide the form on click
    form.togglerElement.addEventListener('click', form.handleToggleClick);
  },

  handleSubmit: function(event) {
    // stop default behavior, in this case a page refresh when the form is submit
    event.preventDefault();
    // fetch the size present in the input
    const value = form.inputElement.valueAsNumber;
    // generate the grid with the new value
    grid.generate(value);
  },

  handleToggleClick: function() {
    form.element.classList.toggle('off');
    if (form.element.classList.contains('off')) {
      form.togglerElement.textContent = 'Afficher la configuration';
    }
    else {
      form.togglerElement.textContent = 'Masquer la configuration';
    }
  },
};