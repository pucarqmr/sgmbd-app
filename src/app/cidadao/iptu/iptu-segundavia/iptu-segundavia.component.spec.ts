import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptuSegundaviaComponent } from './iptu-segundavia.component';

describe('IptuSegundaviaComponent', () => {
  let component: IptuSegundaviaComponent;
  let fixture: ComponentFixture<IptuSegundaviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IptuSegundaviaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IptuSegundaviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
