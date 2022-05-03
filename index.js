var lancerDe = document.getElementById('dice');
var button = document.getElementById('btn');
var resultatLance = [];

btn.addEventListener('click', function() {
  lancerDe = document.getElementById('dice').value;
  resultatDeAleatoire(lancerDe)
});

function resultatDeAleatoire(lancerDePar) {
  for (let i = 1; i <= lancerDePar; i++) { // lance le dé selon le nombre de fois qui est dans l'input
    var deAleatoire = Math.floor(Math.random() * 6 + 1); // génère des nombres aléatoires correspondant au nombre de fois indiqué dans input
    resultatLance.push(deAleatoire); // pousse les nombres aléatoires dans l'array
  }
  frequence(resultatLance) // appel la fonction pour calculer la fréquence
}

function frequence(array) {
  var count = 0; // = nombre de fois qu'un nombre apparait
  console.log(array);

  for (let faceDe = 1; faceDe <= 6; faceDe++) { //faceDe = numéro du dé apparue qui augmente avec la loop
    array.forEach(element => { // pour chaque nombre
      if (element == faceDe) { // si element = à faceDe (qui est égal au numéro du dé)
        count = count + 1; // count augmente de 1
      }
    });
    var ligneHtml = document.getElementById("numero" + faceDe).innerHTML = "La face " + faceDe + " est apparue " + count + " fois";
    count = 0; // count retourne à 0 pour éviter de prendre en compte le nombre précédent
  }
}
