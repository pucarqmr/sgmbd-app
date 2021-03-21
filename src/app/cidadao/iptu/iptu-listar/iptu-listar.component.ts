import {Component, OnInit, Output} from '@angular/core';
import {Iptu} from "../../../model/iptu.model";
import {IptuService} from "../../../service/iptu.service";

@Component({
  selector: 'app-iptu-listar',
  templateUrl: './iptu-listar.component.html',
  styleUrls: ['./iptu-listar.component.css']
})
export class IptuListarComponent implements OnInit {

  @Output() iptuOut: Iptu
  iptus: Iptu[]

  constructor(private iptuService: IptuService) { }

  ngOnInit(): void {
    this.getIptus()
  }

  getIptus() {
    this.iptuService.getIptus().subscribe(iptus => this.iptus = iptus)
  }

  iptuDetail(iptu: Iptu) {
    this.iptuOut = iptu;
  }

}
