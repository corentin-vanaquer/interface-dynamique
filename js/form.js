const form = {
  create: function() {
    // cibler le parent
    form.element = document.querySelector('.configuration');
    // créer l'élement
    // je fais une propriété sur mon objet qui est lui même global
    // ainsi j'aurai accès à cette propriété ailleurs
    form.inputElement = document.createElement('input');
    // le configurer
    form.inputElement.placeholder = 'Taille de la grille';
    // Comme notre champ n'a pas de label on peut lui préciser un attribut aria-label pour les lecteurs d'écran
    form.inputElement.setAttribute('aria-label', 'Taille de la grille');
    form.inputElement.className = 'configuration-input';
    form.inputElement.type = 'number';
    // insérer dans le parent
    form.element.appendChild(form.inputElement);

    // créer un deuxième élement
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Valider';
    buttonElement.type = 'submit';
    buttonElement.className = 'configuration-button';
    form.element.appendChild(buttonElement);

    // je veux réagir à la soumission du formulaire
    form.element.addEventListener('submit', form.handleSubmit);

    form.togglerElement = document.getElementById('toggler');
    form.togglerElement.addEventListener('click', form.handleToggleClick);
  },

  handleSubmit: function(event) {
    // j'empeche le comportement par défaut, ici l'actualisation de la page à la soumission du form
    event.preventDefault();
    // je récupère la taille demandée via l'Element qui représente l'input
    const value = form.inputElement.valueAsNumber;
    // je regénère la grille
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