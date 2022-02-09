class ViewAddRecipe {
  constructor() {
    this.html = document.getElementById("html-addingView").innerHTML;
    this.addRecipe = null;
  }

  initAddRecipe(addRecipe) {
    this.addRecipe = addRecipe;
  }

  render() {
    document.getElementById("page").innerHTML = this.html;
    document.getElementById("adding-form").addEventListener("submit", evenement => this.save(evenement));
  }

  save(evenement) {
    evenement.preventDefault();

    let nom = document.getElementById("recipeName").value;
    let cooking = document.getElementById("recipeCookingTime").value;
    let baking = document.getElementById("recipeBakingTime").value;
    let ingredients = document.getElementById("recipeIngredientsList").value;
    let steps = document.getElementById("recipeStepsList").value;

    this.addRecipe(new Recipe(nom, cooking, baking, ingredients, steps, null));

  }

}
