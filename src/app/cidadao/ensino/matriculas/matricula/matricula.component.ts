import { Component, OnInit } from '@angular/core';
import {EnsinoService} from "../../../../service/ensino.service";
import {Escola} from "../../../../model/escola.model";
import {FormControl, FormGroup, FormGroupName} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  escolas: Escola[]

  alunoForm = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    nomePai: new FormControl(''),
    nomeMae: new FormControl(''),
    escola: new FormControl(''),
    endereco: new FormGroup({
      logradouro: new FormControl(''),
      numero: new FormControl(''),
      bairro: new FormControl(''),
      complemento: new FormControl('')
    })
  });

  constructor(private ensinoService: EnsinoService, private router: Router) { }


  ngOnInit(): void {
    this.getEscolasMunicipais()
  }

  onSubmit() {
    this.addAluno(this.alunoForm.value);
  }

  addAluno(aluno: any): void {
    this.ensinoService.addAluno(aluno)
      .subscribe(() => this.router.navigate(['/heroes']));
  }

  getEscolasMunicipais() {
    this.ensinoService.getEscolasMunicipais().subscribe(escolas => this.escolas = escolas);
  }

}
