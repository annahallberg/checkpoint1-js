//Skapar en array innehållande böcker
let books = [
   "Reminders of Him",
   "Good Girls Guide to Murder",
   "Gone Girl",
   "Jag kan ha fel",
   "Och så var dom bara nio",
];
//Kallar på funktion som skriver ut arrayens värden i en tabell
updateOutput();

function updateOutput() {
   //Lägger till grunden för ett table i output
   let output =
      "<table class='border table table-striped mt-3'><thead><tr><th>Boktitel</th><th>Redigera</th><th>Radera</th></tr></thead><tbody>";
   //Loop som skriver ut arrayen i tabel-rader samt tillhörande knappar som går till funktioner för att editera och radera
   //Index-positionen följer med in till editera och radera-funktionerna
   for (let i = 0; i < books.length; i++) {
      output +=
         "<tr><td class='fs-5 '>" +
         books[i] +
         "</td>" +
         "<td> <button class='btn mx-auto btn-primary' onclick='editBook(" +
         i +
         ")'>Redigera</button></td> <td><button class='btn btn-danger mx-auto' onclick='deleteBook(" +
         i +
         ")'>Radera</button> </td></tr>";
   }
   output += "</tbody></table>";
   //Placerar ut innehållet i elementet (en div) som heter output
   document.getElementById("output").innerHTML = output;
}

//Funktion som lägger till en bok
//I HTML ligger en input samt en knapp som kör funktionen, värdet från inputen läggs in i arrayen
function addBook() {
   let newbook = document.getElementById("newbook").value;
   //Kollar så att inputen INTE är tom, fail safe för att användaren inte ska kunna lägga till tomma värden
   /*För att undkomma att användaren kan lägga till mellanslag/whitespaces används metoden trim som tar bort 
   mellanslag innan och efter textsträngar, eftersom det inte fins någon textsträng tar allt bort och inget kan läggas till */
   if (newbook.length !== 0 && newbook.trim() !== "") {
      books[books.length] = newbook;
      document.getElementById("newbook").value = "";
      //Skriver ut den uppdaterade arrayen i tabell
      updateOutput();
   }
}

//Funktion som raderar en bok från arrayen
//När användaren klickar på radera-knapp i tabellen så körs funktionen
function deleteBook(id) {
   console.log("Ta bort en bok! " + id);
   //Vald index-plats raderas, 1an talar om att endast 1 värde ska raderas
   books.splice(id, 1);
   //Skriver ut den uppdaterade arrayen i tabell
   updateOutput();
}

//Funktion där användaren kan redigera en bok
//redigeringen av namnet sker i en prompt som sedan uppdaterar värdet på vals index-plats
function editBook(id) {
   let edit = prompt("Redigera boken " + books[id]);
   //Fail safe som kollar så prompten INTE är tom och att den INTE kan spara tomma värden
   if (edit !== null && edit !== "") {
      books[id] = edit;
   }
   //Skriver ut den uppdaterade arrayen i tabell
   updateOutput();
}
