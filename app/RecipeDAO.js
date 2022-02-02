class RecipeDAO {
  lister(action) {
    fetch('https://3yye5o5a63.execute-api.us-east-1.amazonaws.com/default/lister')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let listRecipe = [];
        for (let position in data) {
            /*
                this.name_of_recipe = name_of_recipe;
    this.time_of_preparation = time_of_preparation;
    this.time_of_cook = time_of_cook;
    this.list_of_ingredients = list_of_ingredients;
    this.list_of_steps = list_of_steps;
             */
          let recipe = new Recipe(data[position].name_of_recipe,
            data[position].time_of_preparation,
            data[position].time_of_preparation,
            data[position].time_of_cook,
            data[position].list_of_ingredients,
            data[position].list_of_steps,
            data[position].id);

          console.log(recipe);
          listRecipe.push(recipe);
        }
        action(listRecipe);
      });
  }

  chercher(id, action) {
    fetch('https://rof7bte3c7.execute-api.us-east-1.amazonaws.com/default/chercher-par-id?id=' + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let recipe = new Recipe(data.nom,
          data.marque,
          data.description,
          data.id);
        action(recipe);
      });
  }

  ajouter(cadeau, action) {
    console.log(JSON.stringify(cadeau));
    fetch('https://0igm350o8d.execute-api.us-east-1.amazonaws.com/default/ajouter',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "recipejson=" + JSON.stringify(cadeau),
        mode: 'cors',
      })
      .then(response => response.text())
      .then(data => {
        console.log('Détail:', data);
        action();
      });
  }

}
