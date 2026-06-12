import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testinomial } from './testinomial';

describe('Testinomial', () => {
  let component: Testinomial;
  let fixture: ComponentFixture<Testinomial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testinomial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testinomial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
