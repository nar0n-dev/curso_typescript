// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatena = concatenaString('Natan', '&', 'Jessica');
const upper = toUpperCase('Natan', '&', 'Jessica');

console.log(result);
console.log(concatena);
console.log(upper);

const array1: readonly string[] = ['Natan', 'Jessica'];
const array2: ReadonlyArray<string> = ['Natan', 'Jessica'];

console.log(array1);
console.log(array2);
