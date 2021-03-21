import {Component, Input, OnInit, Output} from '@angular/core';
import {EnsinoService} from "../../../service/ensino.service";
import {Escola} from "../../../model/escola.model";

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit {

  escolas: Escola[];
  @Output() escolaOut: Escola;

  constructor(private ensinoService: EnsinoService) { }

  ngOnInit(): void {
    this.getEscolas();
  }

  getEscolas() {
    this.ensinoService.getEscolas().subscribe(escolas => this.escolas = escolas);
  }

  escolaDetail(escola: Escola) {
    this.escolaOut = escola;
  }

}
