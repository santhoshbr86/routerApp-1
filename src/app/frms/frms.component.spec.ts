import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmsComponent } from './frms.component';

describe('FrmsComponent', () => {
  let component: FrmsComponent;
  let fixture: ComponentFixture<FrmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
