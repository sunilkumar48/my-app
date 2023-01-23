import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdavancecalculatorComponent } from './adavancecalculator.component';

describe('AdavancecalculatorComponent', () => {
  let component: AdavancecalculatorComponent;
  let fixture: ComponentFixture<AdavancecalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdavancecalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdavancecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
