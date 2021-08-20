enum Cores {
  red = 10,
  green = 100,
  blue = 1000,
}

enum Cores {
  purple = 'purple',
  orange = 1001,
  pink,
}

function chooseColors(color: Cores): void {
  console.log(Cores[color]);
}

chooseColors(Cores.purple);
chooseColors(123231321);
