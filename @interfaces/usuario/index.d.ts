import { DiaSemana, UsuarioSetor } from '@enums';

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
