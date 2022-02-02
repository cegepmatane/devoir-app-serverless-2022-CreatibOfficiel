class RecipeDAO {
  lister(action) {
    fetch('https://3yye5o5a63.execute-api.us-east-1.amazonaws.com/default/lister')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let listeCadeau = [];
        for (let position in data) {
          let cadeau = new Recipe(data[position].nom,
            data[position].marque,
            data[position].description,
            data[position].id);

          console.log(cadeau);
          listeCadeau.push(cadeau);
        }
        action(listeCadeau);
      });
  }

  chercher(id, action) {
    fetch('https://rof7bte3c7.execute-api.us-east-1.amazonaws.com/default/chercher-par-id?id=' + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let cadeau = new Recipe(data.nom,
          data.marque,
          data.description,
          data.id);
        action(cadeau);
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
        body: JSON.stringify(cadeau),
      })
      .then(response => response.text())
      .then(data => {
        console.log('Détail:', data);
        action();
      });
  }

}
