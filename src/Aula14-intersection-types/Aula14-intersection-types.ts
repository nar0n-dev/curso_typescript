type HasName = { name: string };
type HasLastName = { lastname: string };
type HasYears = { year: number };

type Person = HasName & HasLastName & HasYears; //and

type AB = 'A' | 'B';
type AC = 'A' | 'C';

type Intersection = AB & AC;

const unionPerson: Person = {
  name: 'Natan',
  lastname: 'Natan',
  year: 23,
};

console.log(unionPerson);
