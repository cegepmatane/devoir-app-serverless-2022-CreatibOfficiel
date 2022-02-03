class ViewRecipe {
  constructor() {
    this.html = document.getElementById("html-recipeView").innerHTML;
    this.recipe = null;
  }

  initRecipe(recipe) {
    this.recipe = recipe;
  }

  render() {
    document.getElementById("page").innerHTML = this.html;

    document.getElementById("recipe-name-title").innerHTML = this.recipe.name_of_recipe;

    document.getElementById("recipe-view").innerHTML =
      document.getElementById("recipe-view").innerHTML
        .replace("{cooking-time}", this.recipe.time_of_preparation)
        .replace("{baking-time}", this.recipe.time_of_cook)
        .replace("{ingredients-list}", this.recipe.list_of_ingredients)
        .replace("{steps-list}", this.recipe.list_of_steps);
  }
}
