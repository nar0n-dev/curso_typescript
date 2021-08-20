let x = 10;
x = 0b1010;
const y = 10;
let a = 100 as const;
a = 120;

const person = {
  name: 'Natan' as const,
  lastName: 'Cardoso',
};

function escolhaCor(cor: 'red' | 'yellow' | 'green'): string {
  return cor;
}

console.log(escolhaCor('red'));
