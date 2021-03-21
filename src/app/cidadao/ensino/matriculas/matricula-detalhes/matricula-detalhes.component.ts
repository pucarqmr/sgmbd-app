import {Component, OnInit, Output} from '@angular/core';
import {Aluno} from "../../../../model/aluno.model";
import {EnsinoService} from "../../../../service/ensino.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-matricula-detalhes',
  templateUrl: './matricula-detalhes.component.html',
  styleUrls: ['./matricula-detalhes.component.css']
})
export class MatriculaDetalhesComponent implements OnInit {

  @Output() alunoDetalheOut: Aluno

  alunoSearchForm = new FormGroup({
    cpf: new FormControl('')
  });

  constructor(private ensinoService: EnsinoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.getAluno(this.alunoSearchForm.value.cpf);
  }

  getAluno(cpf: string) {
    console.log(cpf)
    this.ensinoService.getAluno(cpf).subscribe(aluno => this.alunoDetalheOut = aluno);
    console.log(this.alunoDetalheOut)
  }

}
