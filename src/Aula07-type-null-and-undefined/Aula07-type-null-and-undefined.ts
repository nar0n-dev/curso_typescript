let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  fistname: string,
  lastname?: string,
): {
  fistname: string;
  lastname?: string;
} {
  return {
    fistname,
    lastname,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfNumber = squareOf(2);

if (squareOfNumber === null) {
  console.log('account invalid');
} else {
  console.log(squareOfNumber * 100);
}
