class ViewRecipe {
  constructor() {
    this.html = document.getElementById("html-recipeView").innerHTML;
    this.recipe = null;
  }

  initRecipe(recipe) {
    this.recipe = recipe;
  }

  afficher() {
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("recipe-name").innerHTML = this.recipe.name_of_recipe;
    document.getElementById("recipe-cooking-time").innerHTML = this.recipe.time_of_preparation;
    document.getElementById("recipe-baking-time").innerHTML = this.recipe.time_of_cook;
    document.getElementById("recipe-ingredients-list").innerHTML = this.recipe.list_of_ingredients;
    document.getElementById("recipe-steps-list").innerHTML = this.recipe.list_of_steps;
  }
}
