import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeluangBisnisComponent } from './peluang-bisnis.component';

describe('PeluangBisnisComponent', () => {
  let component: PeluangBisnisComponent;
  let fixture: ComponentFixture<PeluangBisnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeluangBisnisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeluangBisnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
