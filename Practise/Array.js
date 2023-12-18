{const clients = ["Kasia", "Zuma", "Miśka"];

console.log(clients[1])
console.log(clients[0])
console.log(clients[2])

console.log(clients)

console.log(clients.length)

const lastElementIndex = clients.length -1;
console.log(lastElementIndex);

console.log(clients[lastElementIndex])

}

console.log("-------iteracje----------")

const clients = ["Kasia", "Zuma", "Ida"];
for (let i=0; i < clients.length; i += 1) {
    console.log(clients[1])
}

const client = ["Kasia", "Zuma", "Ida"];
for (const client of clients) {
    console.log(client)
}

const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}
