import { IUsuarioModel } from '../usuario/IUsuarioCreateInput';

export interface IUsuarioVendedorModel {
  id: number;
  usuario?: IUsuarioModel;
  //microrregioes?: IMicrorregiaoModel[];
}
