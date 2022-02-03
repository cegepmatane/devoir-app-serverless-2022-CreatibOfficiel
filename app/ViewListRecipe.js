class ViewListRecipe {
  constructor() {
    this.html = document.getElementById("html-listView").innerHTML;
    this.listRecipeGiven = null;
  }

  initListRecipe(listRecipeGiven) {
    this.listRecipeGiven = listRecipeGiven;
  }

  afficher() {
    document.getElementById("page").innerHTML = this.html;

    let listRecipe = document.getElementById("liste-cadeau");
    const listRecipeItemHTML = listRecipe.innerHTML;
    let listRecipeHTMLReplacement = "";

    for (var numberRecipe in this.listRecipeGiven) {
      let listRecipeItemHTMLReplacement = listRecipeItemHTML;
      listRecipeItemHTMLReplacement = listRecipeItemHTMLReplacement.replace("{Recipe.id}", this.listRecipeGiven[numberRecipe].id);
      listRecipeItemHTMLReplacement = listRecipeItemHTMLReplacement.replace("{Recipe.nom}", this.listRecipeGiven[numberRecipe].nom);
      listRecipeHTMLReplacement += listRecipeItemHTMLReplacement;
    }

    listRecipe.innerHTML = listRecipeHTMLReplacement;
  }

}
