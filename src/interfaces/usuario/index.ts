import { DiaSemana, UsuarioSetor } from '@src/enums';
import { IUnidadeNegocioModel } from '@src/interfaces/unidade-negocio';
import { IUsuarioVendedorModel } from '@src/interfaces/vendedor';

export interface IUsuarioCreateInput {
  nome: string;
  email: string;
  senha: string;
  permissoesId: number[];
  perfilPermissoesId?: number;
  usuarioSetor: UsuarioSetor;
  horarioInicioAcesso?: string;
  horarioFinalAcesso?: string;
  diasAcesso: DiaSemana[];
  fotoPerfil?: string;
  microrregioesId?: number[];
}

export interface IUsuarioUpdateInput {
  nome?: string;
  email?: string;
  permissoesId?: number[];
  perfilPermissoesId?: number;
  usuarioSetor?: UsuarioSetor;
  horarioInicioAcesso?: string;
  horarioFinalAcesso?: string;
  diasAcesso?: DiaSemana[];
  logado?: boolean;
  microrregioesId?: number[];
}

export interface IUsuarioModel {
  id: number;
  unidadeNegocioId?: number;
  unidadesNegocioAccess?: IUnidadeNegocioModel[];
  nome?: string;
  email?: string;
  fotoPerfil?: string;
  usuarioSetor?: UsuarioSetor;
  usuarioVendedor?: IUsuarioVendedorModel;
  horarioInicioAcesso?: string;
  horarioFinalAcesso?: string;
  diasAcesso?: DiaSemana[];
  logado?: boolean;
  permissoes?: IPermissaoModel[];
  perfilPermissoesId?: number;
  status: boolean;
}

export interface IPermissaoModel {
  id: number;
  nome?: string;
  chave?: string;
  descricao?: string;
}
