import { IUsuarioModel } from '@src/interfaces/usuario';

export interface IUsuarioVendedorModel {
  id: number;
  usuario?: IUsuarioModel;
  //microrregioes?: IMicrorregiaoModel[];
}
