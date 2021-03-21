import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaListarComponent } from './matricula-listar.component';

describe('MatriculaListarComponent', () => {
  let component: MatriculaListarComponent;
  let fixture: ComponentFixture<MatriculaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
