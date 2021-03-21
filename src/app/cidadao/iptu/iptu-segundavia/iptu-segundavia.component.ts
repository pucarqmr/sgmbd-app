import {Component, OnInit, Output} from '@angular/core';
import {Iptu} from "../../../model/iptu.model";
import {IptuService} from "../../../service/iptu.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-iptu-segundavia',
  templateUrl: './iptu-segundavia.component.html',
  styleUrls: ['./iptu-segundavia.component.css']
})
export class IptuSegundaviaComponent implements OnInit {

  @Output() iptuDetalhesOut: Iptu;

  iptuSearchForm = new FormGroup({
    inscricaoImobiliaria: new FormControl('')
  });

  constructor(private iptuService: IptuService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.getSegundaViaIptu(this.iptuSearchForm.value.inscricaoImobiliaria);
  }

  getSegundaViaIptu(inscricaoImobiliaria: string) {
    this.iptuService.getIptu(inscricaoImobiliaria).subscribe(iptu => this.iptuDetalhesOut = iptu)
  }

}
