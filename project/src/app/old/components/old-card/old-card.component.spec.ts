import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldCardComponent } from './old-card.component';

describe('OldCardComponent', () => {
  let component: OldCardComponent;
  let fixture: ComponentFixture<OldCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
