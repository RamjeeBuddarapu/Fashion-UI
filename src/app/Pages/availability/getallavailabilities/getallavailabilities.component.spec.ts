import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallavailabilitiesComponent } from './getallavailabilities.component';

describe('GetallavailabilitiesComponent', () => {
  let component: GetallavailabilitiesComponent;
  let fixture: ComponentFixture<GetallavailabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallavailabilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallavailabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
