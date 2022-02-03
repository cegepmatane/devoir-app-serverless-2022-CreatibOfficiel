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
    document.getElementById("recipe-nom").innerHTML = this.recipe.name_of_recipe;
    document.getElementById("recipe-time-preparation").innerHTML = this.recipe.time_of_preparation;
    document.getElementById("recipe-time-cook").innerHTML = this.recipe.time_of_cook;
    document.getElementById("recipe-list-ingredients").innerHTML = this.recipe.list_of_ingredients;
    document.getElementById("recipe-list-steps").innerHTML = this.recipe.list_of_steps;
  }
}
