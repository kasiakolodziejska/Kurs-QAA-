"use strict"

console.log("------QA-----")
const user = "Kasia"
console.log('your username is ${user}"')
console.log(`your username is ${user}`)
console.log("your username is " + user)
const message = `your username is ${user}`
// const message2 = "your username is", user
console.log("your username is", user)

console.log("----Operatory logiczne-----")


// falsy values
// 0
// NaN
// null
// undefined
// ''
// false

// truthy values
// 1
// "0"
// "false"
// 49382
// "fdasfas"
// []
// {}
// methods
// functions

// AND
// OR
// Negation

const age = 20
console.log(age > 10)
console.log("-----AND-----")
const age = 20
// age > 10 => true
// age < 30 => true
// true && true
console.log(age > 10 && age < 30)

// false && truthy
console.log(false && "50") // false

// falsy && truthy
console.log(0 && "50") // 0

console.log("true" && -15 && 0) // 0

console.log("true" && -15 && 329) // 329
const resultOfAND = "true" && -15 && 329
console.log("resultOfAND", resultOfAND)
console.log("-----OR-----")

console.log("15" || false) // "15"
console.log("15" && false) // false

console.log(false || 20 || NaN) // 20
console.log(false && 20 && NaN)
// false

// age === 20 => false
// age === 27 => true
// (age < 10 && age > 5) => (5, 10)
// (age < 30 && age > 25) => (25, 30)
// (5,10) LUB (25, 30)

console.log((age < 10 && age > 5) || (age < 30 && age > 25))

console.log("------Negation------")

// !true -> false
// !false -> true
console.log("!true", !true)
console.log("!false", !false)
// !truthy -> false
console.log("!5", !"5")
// !falsy -> true
console.log("!NaN", !NaN)

// !!truthy -> true
console.log("!!5", !!5)
// !!falsy -> false
console.log("!!NaN", !!NaN)

console.log(!(age > 10 && age < 30))

console.log("------IF------")

const subscription = "pro-2"

let cost = 0

// if (subscription === "pro") cost = 100

// if(truthy) -> kod się wykona
if (subscription.includes("pro")) {
  // not the greatest nesting of ifs
  if (subscription === "pro") {
    cost = 100
  } else {
    cost = 200
  }
} else if (subscription === "trial") {
  cost = 50
} else {
  // if(falsy) -> else
  cost = 0
}

console.log("cost", cost)

console.log("------Ternary-----")

let type

const userAge = 20

// if (userAge >= 18) {
//   type = "adult"
// } else {
//   type = "child"
// }

type = userAge >= 18 ? "adult" : "child"
// condition => userAge >= 18
// ifTruthy => "adult"
// ifFalsy => "child"
// condition ? ifTruthy  : ifFalsy
console.log("Type", type)

console.log("------scope-----")

const global = "globalVariable"

if (true) {
  // blockA
  const a = 15
  console.log("global in A", global)
  if (true) {
    // blockB
    const b = 30
    // const global = 50 // variable shadowing - bad practice
    console.log("global in B", global)
    console.log("b in block B", b)
    console.log("a in block B", a)
  }
  //   console.log("b in block A", b) // error
}

if (true) {
  // blockC
  const c = 10
  console.log("global in C", global)
  //   console.log("a in block C", a) // error
}

console.log("-----Scopes2------")

const userSubscription = "pro-2"
let userCost = 0

if (userSubscription.includes("pro")) {
  // start of A
  const proBasePrice = 100
  userCost = proBasePrice
  if (userSubscription === "pro-2") {
    // start of B
    const someVariable = "test"
    userCost = proBasePrice * 2
    // end of B
  }

  // console.log(someVariable) // error
  // end of A
}

// A nadrzędny
// B podrzędny
// zmienne z A widoczne są w B
// zmienne w B nie są widoczne A

console.log("userCost", userCost)

console.log("-----Loop----")

// for

for (let i = 0; i <= 20; i += 5) {
  console.log("obrót pętli for", i)
  // i <= 20 => robię obrót
  // i === 0
  // obrót
  // i += 5
  // i <= 20 => robię kolejny obrót
}

// i, j, k, l
// i, ii, iii, iv
for (let i = 0; i <= 20; i += 1) {
  console.log("drugi for", i)
}

for (let i = 20; i >= 0; i -= 1) {
  console.log("trzeci for", i)
}

// while
// do...while

let counter = 0
// while (truthy)
while (counter <= 10) {
  console.log("counter", counter)
  counter += 1
}

// first checks condition
while (false) {
  console.log("while falsy")
}

// does one iteration first and then checks condition
do {
  console.log("do...while")
} while (false)

// break
const startingNumber = 2

let score = 1
for (let i = 0; i < 1000; i += 1) {
  score *= startingNumber
  if (score > 10 * 1000) {
    break // natychmiastowe wyjście z pętli
  }
  console.log("i", i)
}
console.log(score)

// continue
for (let i = 1; i <= 30; i += 1) {
  if (i % 2 === 0) {
    // i / 2 szukamy reszty
    // 1 / 2 = 0 r 1
    continue // natychmiastowe zakończenie pojedynczego obrotu pętli
  }
  console.log("its odd", i)
}
// even - parzyste
// odd - nieparzyste

for (let i = 0; i < 10; i += 1) {
  for (let j = 0; j < 10; j += 1) {
    if (j === 3) {
      break // natychmiastowo kończy pętlę w której się znajduje
    }
    console.log({ i, j })
  }
}


