import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptuComponent } from './iptu.component';

describe('IptuComponent', () => {
  let component: IptuComponent;
  let fixture: ComponentFixture<IptuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IptuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IptuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
