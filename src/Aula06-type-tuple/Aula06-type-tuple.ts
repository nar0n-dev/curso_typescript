const dadosCliente1: [number, string] = [1, 'Natan'];
const dadosCliente2: [number, string, string?] = [1, 'Natan'];
const dadosCliente3: [number, string, string?, ...string[]] = [
  1,
  'Natan',
  'Jessica',
];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Nar0n';
dadosCliente2[2] = 'Nar0n';
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
