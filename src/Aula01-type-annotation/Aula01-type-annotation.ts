/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint


// Arrays
let arrayNumbersA: Array<number> = [1, 2, 3];
let arrayNumbersB: number[] = [1, 2, 3];
let arrayStringsA: Array<string> = ['a', 'b'];
let arrayStringsB: string[] = ['a', 'b'];


//Objects
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 23,
  nome: 'Natan',
};


// Functions
function somaA(x: number, y: number) {
  return x + y;
}
const somaB: (x: number, y: number) => number = (x, y) => x + y;

const result = somaA(2, 2);

