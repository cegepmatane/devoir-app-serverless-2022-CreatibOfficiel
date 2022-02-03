class RecipeDAO {
    getAll(action) {
        console.log(apiUrl.getAll)
        fetch(apiUrl.getAll)
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

    getById(id, action) {
        fetch(apiUrl.getById + "?id=" + id)
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


    Add(recipe, action) {
        console.log(JSON.stringify(recipe));
        fetch(apiUrl.add,
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
