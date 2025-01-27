// recuperer les id dans mon document html

const enlever = document.getElementById('enlever');
const reset = document.getElementById('reset');
const ajouter = document.getElementById('ajouter');

let count = 0; // initialiser le compteur a 0


// ajouter un evenement sur les boutons ajouter, enlever et reset


enlever.onclick = function() {
    count --; //on enleve 1 a chaque click
    document.getElementById('count').innerHTML = count;
}

ajouter.onclick = function() {
    count ++; //on ajoute 1 a chaque click
    document.getElementById('count').innerHTML = count;
}

reset.onclick = function() {
    count = 0; //on remet le compteur a 0
    document.getElementById('count').innerHTML = count;
}