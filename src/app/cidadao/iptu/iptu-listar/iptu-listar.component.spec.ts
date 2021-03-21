import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptuListarComponent } from './iptu-listar.component';

describe('IptuListarComponent', () => {
  let component: IptuListarComponent;
  let fixture: ComponentFixture<IptuListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IptuListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IptuListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
