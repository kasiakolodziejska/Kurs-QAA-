function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}
{
const clients = ["Mango", "Poly", "Ajax"];
}
{
const clients = ["Patryk", "Adam", "Krzys"];
console.log(clients[0]); 
console.log(clients[1]); 
console.log(clients[2]); 
}
{
const clients = ["Patryk", "Adam", "Krzys"];
clients[0] = "Kiwi";
clients[1] = "Banan";
console.log(clients);
}


//const clients = ["Patryk", "Adam", "Krzys", "Kasia", 2, false];
//console.log(clients.length);


// const clients = ["Patryk", "Adam", "Krzys"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////// TABLICE ITERACJE

////const clients = ["Kasia", "Ida", "Zuma"];

///for (let i = 0; i < clients.length; i += 1) {
//console.log(clients[i]);
//}
//

const dzieci = ["Gucio", "Ida"]
for (const dziecko of dzieci)
console.log(dziecko)

// const clients = ["Patryk", "Adam", "Krzys"];
// for (const client of clients) {
//   console.log(client);
// }
// const string = "javascript";
// for (const character of string) {
//   console.log(character);
// }


const clients = ["Patryk", "Adam", "Krzys"];
const clientNameToFind = prompt("Podaj imie uzytkownika: ");
let message;
for (const client of clients) {
//   // W każdej iteracji sprawdzamy, czy element tablicy jest podobny
//   // do imienia klienta. Jeśli wszystko się zgadza, wtedy zapiszmy w message
//   // wiadomość o sukcesie i zróbmy break, aby przerwać poszukiwanie
if (client === clientNameToFind) {
     message = "Klient z takim imieniem jest w bazie danych!";
     break;
   }
   // Jeśli nie znajdziemy podobieństw, to zapiszmy do message wiadomość o braku imienia
  message = "Nie znaleźliśmy takiego klienta w bazie danych!";
}
 console.log(message); // "Klient z takim imieniem jest w bazie danych!"


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const wyznacznik = 15;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < wyznacznik) {
//     continue;
//   }
//   console.log(`Liczba większa niż ${wyznacznik}: ${numbers[i]}`); // 18, 29, 34
// }

////////////////////////////////////////////////////////////////////////////////////////////////////// METODY TABLICOWE

{
const napis = "Napis";
console.log(napis.split("")); 
const message = "JavaScript jest ciekawy";
console.log(message.split(" ")); 
}

// const words = ["JavaScript", "jest", "ciekawy"];
// console.log(words.join(""));
// console.log(words.join(" ")); 
// console.log(words.join("-"));


// const clients = ["Mango", "Jablko", "Banan", "Kiwi"];
// console.log(clients.indexOf("Jablko"));
// console.log(clients.indexOf("Mariola")); 


// const clients = ["Mango", "Jablko", "Banan", "Kiwi"];
// console.log(clients.includes("Banan"));
// console.log(clients.includes("Mariola"));


// const fruit = "apple";
// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }


// const fruit = "apple";
// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }


// let redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }


/////// PUSH POP
//////////////////////////////////////////////////////////// SLICE



// let clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(0, 2));



// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice());



// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); 
// console.log(clients.slice(2)); 



// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); 



//////////////////////////////////////////////////////////// SPLICE



// const scores = [1, 2, 3, 4, 5];
// const deletedScores = scores.splice(0, 3);
// // Tablica scores zawiera teraz dwa elementy
// console.log(scores); 
// // Tablica deletedScores zawiera trzy usunięte elementy
// console.log(deletedScores); 



// const colors = ["red", "green", "blue"];
// colors.splice(1, 0, "purple");
// console.log(colors);



// const colors = ["red", "green", "blue"];
// colors.splice(1, 1, "yellow", "pink", "aaa");
// console.log(colors); 



// const languages = ["C", "C++", "Java", "JavaScript"];
// languages.splice(1, 1, "Python");
// console.log(languages); 
// console.log(languages.splice(1, 2, "C#", "Swift", "Go"));
// console.log(languages); 



//////////////////////////////////////////////////////////// CONCAT



// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];



// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]



// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]



// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]





