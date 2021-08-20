const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'valueA',
  keyB: 'valueB',
};

objectA.keyA = 'value wtf';
objectA.keyC = 'new value';
objectA.keyB = 'dasdada';

console.log(objectA);
