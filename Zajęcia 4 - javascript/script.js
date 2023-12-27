function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}




//////////////////////////////////////////////////////////// FUNKCJE

// // 1. Deklaracja funkcji multiply
// function multiply() {
//     // Ciało funkcji
//     console.log("Log podczas wywoływania funkcji multiply");
// }


// // Deklaracja parametrów x, y, z
// function multiply(x, y, z) {
//     console.log(`Wynikiem mnożenia jest ${x * y * z}`);
// }



// // 1. Deklaracja parametrów x, y, z
// function multiply(x, y, z) {
//     console.log(`Wynikiem mnożenia jest ${x * y * z}`);
//   }
//   // 2. Przekazywanie argumentów
//   multiply(2, 3, 5); // Wynikiem mnożenia jest 30
//   multiply(4, 8, 12); // Wynikiem mnożenia jest 384
//   multiply(17, 6, 25); // Wynikiem mnożenia jest 2550




// function multiply(x, y, z) {
//     console.log("Kod przed return jest wykonywany jak zwykle");
  
//     // Zwracamy wynik wyrażenia mnożenia
//     return x * y * z;
  
//     console.log("Ten log nigdy nie zostanie wywołany, jest po return");
//   }
  
//   // Wynik funkcji można zapisać do zmiennej
//   let result = multiply(2, 3, 5);
//   console.log(result); // 30
  
//   result = multiply(4, 8, 12);
//   console.log(result); // 384
  
//   result = multiply(17, 6, 25);
//   console.log(result); // 2550


/////////////// KONTYNUACJA ZAJEC, KOLEJNOSC WYKONYWANIA KODU

// function multiply(x, y, z) {
//     console.log(`Wynikiem mnożenia jest ${x * y * z}`);
//   }
//   console.log("Log przed wywołaniem funkcji multiply");
//   multiply(2, 3, 5); // Wynikiem mnożenia jest 30
//   console.log("Log po wywołaniu funkcji multiply");



// function count(countFrom = 5, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   }
  
//   //count(1, 5); 
//   //count(2); 
//   //count();



//////////////////////////////////////////////////////// PSEUDOTABLICA ARGUMENTS



// function multiply() {
//     let total = 1;
//     for (const argument of arguments) {
//       total *= argument;
//     }
//     return total;
//   }
//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120



// function fn() {
//     return(Array.from(arguments));
// }



// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Dla operacji wprowadź kwotę większą od zera");
//     } else if (amount > balance) {
//       console.log("Za mało środków na koncie");
//     } else {
//       console.log("Operacja wypłaty powiodła się");
//     }
//   }
//   withdraw(0, 300);
//   withdraw(500, 300); 
//   withdraw(100, 300); 



// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Dla operacji wprowadź kwotę większą od zera");
//       return;
//     }
//     if (amount > balance) {
//       console.log("Za mało środków na koncie");
//       return;
//     }
//     console.log("Operacja wypłaty zakończona");
//   }
//   withdraw(0, 300);
//   withdraw(500, 300);
//   withdraw(100, 300); 




// Deklaracja funkcji (function declaration)
// function multiply(x, y, z) {
//     console.log(`Wynikiem mnożenia jest ${x * y * z}`);
//   }

    
  
// Wyrażenie funkcyjne (function expression)
//multiply(1, 2, 3);
// const multiply = function (x, y, z) {
//   console.log(`Wynikiem mnożenia jest ${x * y * z}`);
// };
// multiply(1, 2, 3);



// Deklaracja funkcji (function declaration)
// multiply(1, 2, 3);
// function multiply(x, y, z) {
//   console.log(`Wynikiem mnożenia jest ${x * y * z}`);
// };
// multiply(4, 5, 6);




/////////////////////////// VAR LET CONST
/////////////////////////// ZAKERES GLOBALNY



// const globalValue = 10;

// console.log(globalValue);

// function foo() {
//   console.log(globalValue);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue);

//   if (i === 2) {
//     console.log(globalValue);
//   }
// }







//////////////////////// ZAKERES BLOKOWY



// function foo() { 
//     console.log(a); // 20
  
//     for (let i = 0; i < 5; i++) {
//       console.log(a); // 20
  
//       if (i === 2) {
//         console.log(a); // 20
//       }
//     }
//   }
  
//   console.log(a);
  
//   for (let i = 0; i < 3; i++) {
//     console.log(a);
//   }








// for (let i = 0; i < 5; i++) {
//     const a = 20;
//     console.log(a);
  
//     if (i === 2) {
//       const b = 30;
//       console.log(a);
//       console.log(b); 
//     }
  
//     if (i === 3) {
//         console.log(a);
//         console.log(b);
//     }
// }



//////////////////////////// PRZYKLADOWY KOD


// function square(size) {
//   const squareArray = [];
//   let result;
//   for (let i = 0; i < size; i++) {
//     result = "";
//     for (let j = 0; j < size; j++) {
//       result += "# ";
//     }
//     squareArray.push(result);
//   }
//   return squareArray.join("\n");
// }
// console.log(square(2));
// console.log(square(4));
// console.log(square(10));



// function triangle(length) {
//   var line = "";
//   for (var i = 1; i <= length; i++) {
//     for(var j=1; j<=i; j++){ 
//       line += "* ";
//     }
//     line+="\n";
//   }
//   return line + "\n";
// }
// console.log(triangle(10));