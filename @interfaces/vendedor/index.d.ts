import { IUsuarioModel } from '@pessoa/usuario';

export interface IUsuarioVendedorModel {
  id: number;
  usuario?: IUsuarioModel;
  //microrregioes?: IMicrorregiaoModel[];
}
