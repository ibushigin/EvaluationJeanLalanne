// OPEN AND CLOSE TABS
  // FORMULAIRE
let hideForm = function(){
  document.getElementById("form").style.display = "none";
};
let showForm = function(){
  document.getElementById("form").style.display = "block";
  //document.getElementById("form").classList.add('show');
};
  // LISTE
let hideListe = function(){
  document.getElementById("liste").style.display = "none";
};
let showListe = function(){
  document.getElementById("liste").style.display = "block";
  //document.getElementById("form").classList.add('show');
};


//CREATION LISTE
let liste = [];


// ADD NEW STUDENT
let nvEleve = function(){
  var lastName = document.getElementById('lastName').value;
  var firstName = document.getElementById('firstName').value;
  var radio;
  if(document.getElementById('e1').checked){
      radio = document.getElementById('e1').value;
    }else if(document.getElementById('e2').checked){
      radio = document.getElementById('e2').value;
    }else if(document.getElementById('e3').checked){
      radio = document.getElementById('e3').value;
    }else if(document.getElementById('e4').checked){
      radio = document.getElementById('e4').value;
    }else if(document.getElementById('e5').checked){
      radio = document.getElementById('e5').value;
    }else if(document.getElementById('e6').checked){
      radio = document.getElementById('e6').value;
    }else if(document.getElementById('e7').checked){
      radio = document.getElementById('e7').value;
    }else if(document.getElementById('e8').checked){
      radio = document.getElementById('e8').value;
    };
    liste.push({nom: lastName, prenom: firstName, image: radio});


    var listeTable = document.getElementById("listeTable");
    var listeGalery = document.getElementById("listeGalery");
    for( i = 0 ; i < liste.length ; i++ ){

        listeTable.insertAdjacentHTML('afterbegin',"<tr id='tr"+i+"'><td><img src='" + liste[i].image +"'></td><td>" + liste[i].nom + "</td><td>" + liste[i].prenom + "</td><td><button class='text-danger' onclick='deleteEleve("+i+")'><i class='fas fa-times'></button></i></td></tr>");
        listeGalery.insertAdjacentHTML('afterbegin',"<figure class='d-flex justify-content-center col-12 col-md-4' id='fg"+i+"'><img src='" + liste[i].image + "' alt='photo de " + liste[i].nom +"'><figcaption><button onclick='deleteEleve("+i+")'><i class='fas fa-times'></button></figcaption>");

    }
    //hideForm();


};
//DELETE STUDENT
let deleteEleve = function(i){
  liste.splice(i, 1);
  var listeItem = document.getElementById("tr"+i);
  listeItem.parentNode.removeChild(listeItem);
  var galeryItem = document.getElementById("fg"+i);
  galeryItem.parentNode.removeChild(galeryItem);


};


//GENERATION DE LA LISTE
// var listeTable = document.getElementById("listeTable");
// if(liste.length <= 0){
//   listeTable.insertAdjacentHTML('afterbegin', "<p>Pas d'élève trouvé</p>")
// }else{
//   for( i = 0 ; i < liste.length ; i++ ){
//     listeTable.insertAdjacentHTML('afterbegin',"<tr><td><img src='" + liste[i].image +"'></td><td>" + liste[i].nom + "</td><td>" + liste[i].prenom + "</td><td><button onclick='deleteEleve("+i+")'><i class='fas fa-times'></button></i></td></tr>");
//
//     }
// }
