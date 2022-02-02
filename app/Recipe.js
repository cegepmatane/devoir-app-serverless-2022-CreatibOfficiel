class Recipe {
  constructor(name_of_recipe, time_of_preparation, time_of_cook, list_of_ingredients, list_of_steps, id = null) {
    this.name_of_recipe = name_of_recipe;
    this.time_of_preparation = time_of_preparation;
    this.time_of_cook = time_of_cook;
    this.list_of_ingredients = list_of_ingredients;
    this.list_of_steps = list_of_steps;
    this.id = id;
  }
}
