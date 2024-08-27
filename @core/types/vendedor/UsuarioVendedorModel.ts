import { IUsuarioModel } from '../usuario/Usuario';

export interface IUsuarioVendedorModel {
  id: number;
  usuario?: IUsuarioModel;
  //microrregioes?: IMicrorregiaoModel[];
}
