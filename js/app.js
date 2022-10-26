const app = {
  init: function () {
    grid.generate(8);
    form.create();
  },
};


// Après le chargement du DOM, on lance la méthode init
document.addEventListener('DOMContentLoaded', app.init);
