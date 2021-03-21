import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResearchService} from "../../service/research.service";
import {Research} from "../../model/research.model";

@Component({
  selector: 'app-researches',
  templateUrl: './researches.component.html',
  styleUrls: ['./researches.component.css']
})
export class ResearchesComponent implements OnInit {

  @Output() research: Research;

  constructor(private route: ActivatedRoute,
              private researchService: ResearchService) { }

  ngOnInit(): void {
  }

  getResearchDetail(id: number): void {
    this.researchService.getResearch(id)
      .subscribe(research => this.research = research);
  }

}
