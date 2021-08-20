// void e quando uma function or method nao retorna nothing

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Natan',
  sobrenome: 'Cardoso',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Natan', 'Jessica');

pessoa.exibirNome();
export { pessoa };
