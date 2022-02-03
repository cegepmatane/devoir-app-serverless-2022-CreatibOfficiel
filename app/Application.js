class Application {
  constructor(window, viewListRecipe, viewRecipe, viewAddRecipe, recipeDAO) {
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

      this.recipeDAO.lister((listRecipe) => this.showNewListRecipe(listRecipe));

    } else if (hash.match(/^#adding/)) {

      this.viewAddRecipe.afficher();

    } else {

      let navigation = hash.match(/^#recipe\/([0-9]+)/);
      let idRecipe = navigation[1];

      this.recipeDAO.chercher(idRecipe, (recipe) => this.showNewRecipe(recipe));
    }
  }

  showNewListRecipe(listRecipe) {

    console.log(listRecipe);
    this.viewListRecipe.initListRecipe(listRecipe);
    document.getElementsByClassName("loader")[0].style.display = "none";
    this.viewListRecipe.afficher();
  }

  showNewRecipe(recipe) {
    console.log(recipe);
    this.viewRecipe.initRecipe(recipe);
    this.viewRecipe.afficher();
  }

  addRecipe(recipe) {
    this.recipeDAO.ajouter(recipe, () => this.showListRecipe());
  }

  showListRecipe() {
    this.window.location.hash = "#";
  }
}

new Application(window, new ViewListRecipe(), new ViewRecipe(), new ViewAddRecipe(), new RecipeDAO());

