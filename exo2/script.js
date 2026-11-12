"use scrict";
// Déclaration d'un tableau (slide 39)
const etudiants = ["Etudiant1" , "Etudiant2" , "Etudiant3"];
// Déclaration d'un objet (slide 40)
const etudiant = {
    nom : "John",
    prenom : "DOE",
    age : 30 ,
};
// Déclaration d'un tableau d'objets (slide 41)
const tableauEtudiants =[
    {nom : "nom1" , prenom : "prenom1" , age : 21},
    {nom : "nom2" , prenom : "prenom2" , age : 22},
    {nom : "nom3" , prenom : "prenom3" , age : 23},
];

// Fonction f1 (slide 46)
function f1() {
     // Boucle for...of (slide 45)
    for (const etudiant of etudiants){
         // Affichage dans la console (slide 34)
        console.log(etudiant);
    }
}
// Fonction f1 (slide 46)
 function f2(){
     // Affichage dans la console (slide 34)
    console.log(etudiant);
 }

 function f3(){
    for(const  etudiant of tableauEtudiants){
         console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age );
    }
 }