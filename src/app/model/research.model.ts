import {Periodo} from "./periodo.model";

export class Research {
  id: number
  nome: string
  descricao: string
  contexto: string
  observacao: string
  periodos: Periodo[]
}
