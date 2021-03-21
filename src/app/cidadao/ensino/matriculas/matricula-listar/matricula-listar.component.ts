import {Component, OnInit, Output} from '@angular/core';
import {EnsinoService} from "../../../../service/ensino.service";
import {Aluno} from "../../../../model/aluno.model";
import {Escola} from "../../../../model/escola.model";

@Component({
  selector: 'app-matricula-listar',
  templateUrl: './matricula-listar.component.html',
  styleUrls: ['./matricula-listar.component.css']
})
export class MatriculaListarComponent implements OnInit {

  alunos: Aluno[];
  @Output() alunoOut: Aluno;

  constructor(private ensinoService: EnsinoService) { }

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos() {
    this.ensinoService.getAlunos().subscribe(alunos => this.alunos = alunos);
  }

  alunoDetail(aluno: Aluno) {
    this.alunoOut = aluno;
  }

}
