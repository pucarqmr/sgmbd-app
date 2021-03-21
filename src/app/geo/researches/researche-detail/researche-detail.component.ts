import {Component, Input, OnInit} from '@angular/core';
import {Research} from "../../../model/research.model";

@Component({
  selector: 'app-researche-detail',
  templateUrl: './researche-detail.component.html',
  styleUrls: ['./researche-detail.component.css']
})
export class ResearcheDetailComponent implements OnInit {

  @Input() research: Research;

  constructor() { }

  ngOnInit(): void {
  }

}
