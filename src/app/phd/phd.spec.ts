import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phd } from './phd';

describe('Phd', () => {
  let component: Phd;
  let fixture: ComponentFixture<Phd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Phd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Phd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
