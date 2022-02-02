class ViewAddRecipe {
  constructor() {
    this.html = document.getElementById("html-addingView").innerHTML;
    this.addRecipe = null;
  }

  initAddRecipe(addRecipe) {
    this.addRecipe = addRecipe;
  }

  afficher() {
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit", evenement => this.enregistrer(evenement));
  }

  enregistrer(evenement) {
    evenement.preventDefault();

    let nom = document.getElementById("cadeau-nom").value;
    let marque = document.getElementById("cadeau-marque").value;
    let description = document.getElementById("cadeau-description").value;

    this.addRecipe(new Recipe(nom, marque, description, null));

  }

}
