class CadeauDAO {
  lister(action) {
    fetch('https://szjfpzh9pl.execute-api.us-east-1.amazonaws.com/default/lister')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let listeCadeau = [];
        for (let position in data) {
          let cadeau = new Cadeau(data[position].nom,
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
    fetch('https://p14kiro6wl.execute-api.us-east-1.amazonaws.com/default/chercher-par-id?id=' + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let cadeau = new Cadeau(data.nom,
          data.marque,
          data.description,
          data.id);
        action(cadeau);
      });
  }

  ajouter(cadeau, action) {
    console.log(JSON.stringify(cadeau));
    fetch('https://b00cm1lju7.execute-api.us-east-1.amazonaws.com/default/ajouter',
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