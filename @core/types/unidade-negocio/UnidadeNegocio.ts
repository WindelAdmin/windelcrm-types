import { TipoUnidadeNegocio } from '../../enums/TipoUnidadeNegocio';

export interface IUnidadeNegocioModel {
  id: number;
  razaoSocial?: string;
  nomeFantasia?: string;
  cpfCnpj?: string;
  tipoUnidadeNegocio?: TipoUnidadeNegocio;
  //contatos?: ContatoModel[]
  //endereco?: EnderecoModel
  unidadeNegocioMatrizId?: number;
  //comissaoPercentual?: Prisma.Decimal | number
  faturaImplantacao?: boolean;
  horaInicioManha?: string;
  horaFinalManha?: string;
  horaInicioTarde?: string;
  horaFinalTarde?: string;
  logo?: string;
  //regioes?: RegiaoModel[]
  dataAtivacao?: Date;
  //status?: Status
  dataInativacao?: Date;
}
