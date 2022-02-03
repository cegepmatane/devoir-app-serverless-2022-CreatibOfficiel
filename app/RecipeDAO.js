class RecipeDAO {
    lister(action) {
        fetch(this.lister_link)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let listRecipe = [];
                for (let position in data) {
                    let recipe = new Recipe(data[position].name_of_recipe,
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
        fetch(this.chercher_link + id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let recipe = new Recipe(data.name_of_recipe,
                    data.time_of_preparation,
                    data.time_of_cook,
                    data.list_of_ingredients,
                    data.list_of_steps,
                    data.id);
                action(recipe);
            });
    }


    ajouter(recipe, action) {
    console.log(JSON.stringify(recipe));
        fetch(this.ajouter_link,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "recipejson=" + JSON.stringify(recipe),
                mode: 'cors',
            })
            .then(response => response.text())
            .then(data => {
                console.log('Détail:', data);
                action();
            });
    }
}
