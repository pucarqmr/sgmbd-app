import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaDetalhesComponent } from './matricula-detalhes.component';

describe('MatriculaDetalhesComponent', () => {
  let component: MatriculaDetalhesComponent;
  let fixture: ComponentFixture<MatriculaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
