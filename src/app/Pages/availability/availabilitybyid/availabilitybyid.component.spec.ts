import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilitybyidComponent } from './availabilitybyid.component';

describe('AvailabilitybyidComponent', () => {
  let component: AvailabilitybyidComponent;
  let fixture: ComponentFixture<AvailabilitybyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilitybyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabilitybyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
