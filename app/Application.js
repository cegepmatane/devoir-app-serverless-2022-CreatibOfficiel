class Application {
  constructor(window, viewListRecipe, viewRecipe, viewAddRecipe, recipeDAO, apiUrl) {
    this.window = window;

    this.viewListRecipe = viewListRecipe;

    this.viewRecipe = viewRecipe;

    this.viewAddRecipe = viewAddRecipe;
    // C'est l'équivalent de function(recipe){this.addRecipe(recipe)}
    this.viewAddRecipe.initAddRecipe(recipe => this.addRecipe(recipe));

    this.recipeDAO = recipeDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () => this.naviguer());

    //let recipe = new Recipe("Bouffe américaine", "67mn", "89mn", "Bouffe", "melange fort", null);
    //this.recipeDAO.ajouter(recipe, () => this.showListRecipe());

    this.naviguer();
  }

  naviguer() {
    let hash = window.location.hash;

    if (!hash) {

      this.recipeDAO.getAll((listRecipe) => this.showNewListRecipe(listRecipe));

    } else if (hash.match(/^#adding/)) {

      this.viewAddRecipe.render();

    } else {
      let navigation = hash.match(/^#recipe\/([0-9]+)/);
      let idRecipe = navigation[1];

      this.recipeDAO.getById(idRecipe, (recipe) => this.showNewRecipe(recipe));
    }
  }

  showNewListRecipe(listRecipe) {
    console.log(listRecipe);
    this.viewListRecipe.initListRecipe(listRecipe);
    document.getElementById("loader").style.display = "none";
    this.viewListRecipe.render();
  }

  showNewRecipe(recipe) {
    console.log(recipe);
    this.viewRecipe.initRecipe(recipe);
    this.viewRecipe.render();
  }

  addRecipe(recipe) {
    this.recipeDAO.add(recipe, () => this.showListRecipe());
  }

  showListRecipe() {
    this.window.location.hash = "#";
  }
}

new Application(window, new ViewListRecipe(), new ViewRecipe(), new ViewAddRecipe(), new RecipeDAO());

