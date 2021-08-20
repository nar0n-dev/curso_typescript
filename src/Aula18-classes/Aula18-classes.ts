export class Empresa {
  public readonly name: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(public readonly name: string, public readonly lastname: string) {}
}

const empresa1 = new Empresa('udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Natan', 'Cardoso');
const colaborador2 = new Colaborador('Jessica', 'Cristina');
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.showColaboradores();
