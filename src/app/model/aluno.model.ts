import {Escola} from "./escola.model";
import {Endereco} from "./endereco.model";

export class Aluno {
  id: number
  nome: string
  cpf: string
  nomePai: string
  nomeMae: string
  escola: Escola
  endereco: Endereco
  situacao: string
}
