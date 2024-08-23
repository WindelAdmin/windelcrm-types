import { DiaSemana } from '../../enums/dia-semana.enum';
import { UsuarioSetor } from '../../enums/usuario-setor.enum';

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
