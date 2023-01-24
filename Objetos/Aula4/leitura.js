const dados = require("./cliente.json");

console.log(dados);

console.log(typeof dados);

console.log(dados.nome)
const clienteEmString = JSON.stringify(dados); // transformando em string

console.log(clienteEmString);
console.log(typeof clienteEmString);

const objetoCliente = JSON.parse(clienteEmString); // transformando em objeto
console.log(objetoCliente);
console.log(typeof objetoCliente);


