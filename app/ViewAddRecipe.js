﻿class ViewAddRecipe {
  constructor() {
    this.html = document.getElementById("html-addingView").innerHTML;
    this.addRecipe = null;
  }

  initAddRecipe(addRecipe) {
    this.addRecipe = addRecipe;
  }

  render() {
    document.getElementById("page").innerHTML = this.html;
    document.getElementById("adding-form").addEventListener("submit", evenement => this.render(evenement));
  }

  save(evenement) {
    evenement.preventDefault();

    let nom = document.getElementById("recipe-name").value;
    let cooking = document.getElementById("recipe-cooking-time").value;
    let baking = document.getElementById("recipe-baking-time").value;
    let ingredients = document.getElementById("recipe-ingredients-list").value;
    let steps = document.getElementById("recipe-steps-list").value;

    this.addRecipe(new Recipe(nom, cooking, baking, ingredients, steps, null));

  }

}
