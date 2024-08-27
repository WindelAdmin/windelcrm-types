import { DiaSemana } from '../../@enums/DiaSemana';
import { UsuarioSetor } from '../../@enums/UsuarioSetor';
import { IUnidadeNegocioModel } from '../unidade-negocio/IUnidadeNegocio';
import { IUsuarioVendedorModel } from '../vendedor/UsuarioVendedorModel';
import { IPermissaoModel } from './IPermissaoModel';

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
