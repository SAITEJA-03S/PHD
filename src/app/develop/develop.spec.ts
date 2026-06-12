import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Develop } from './develop';

describe('Develop', () => {
  let component: Develop;
  let fixture: ComponentFixture<Develop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Develop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Develop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
