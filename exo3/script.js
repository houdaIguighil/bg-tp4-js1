"use scrict";

// Tableau contenant les données des étudiants (slide 39)
const students = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLITON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3],
];
// Fonction B : vérifier si l'étudiant est admis (slide 46)
function B(note){
    // Comparaison et retour d'un booléen (slides 38 et 42)
    return note >= 10;
}
// Fonction A : parcourir les étudiants et appeler B (slide 46)
function A(){
      // Boucle for...of (slide 45)
    for (const student of students ){
         // Appel de la fonction B avec la note de l'étudiant
        const resultat = B(student[3]);
        // Condition if...else (slide 43)
        if(resultat){
             // Affichage dans la console (slide 34)
             console.log(student[0] + ": ADMIS");

        } else{ 
             // Affichage dans la console (slide 34)
                 console.log(student[0] + ": AJOURNÉ");

        }

    }


}