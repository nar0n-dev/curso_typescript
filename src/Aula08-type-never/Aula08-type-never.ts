function makeError(): never {
  throw new Error('Anyhere error');
}

makeError();
