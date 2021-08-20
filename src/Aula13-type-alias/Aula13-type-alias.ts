type Idade = number;
type Pessoa = {
  name: string;
  idade: Idade;
  email: string;
  favoriteColor?: string;
};

type CorRGB = 'Red' | 'Green' | 'Blue';
type CorCMYK = 'Cian' | 'Magenta' | 'Yellow' | 'Black';

type FavoriteColor = CorRGB | CorCMYK;

const personRegister: Pessoa = {
  name: 'Natan',
  email: 'natan@gmail.com',
  idade: 23,
};

export function setFavoriteColor(person: Pessoa, color: FavoriteColor) {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(personRegister, 'Cian'));
