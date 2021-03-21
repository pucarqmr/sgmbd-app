import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcheDetailComponent } from './researche-detail.component';

describe('ResearcheDetailComponent', () => {
  let component: ResearcheDetailComponent;
  let fixture: ComponentFixture<ResearcheDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearcheDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcheDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
