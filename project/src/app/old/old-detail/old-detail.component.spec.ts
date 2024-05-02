import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldDetailComponent } from './old-detail.component';

describe('OldDetailComponent', () => {
  let component: OldDetailComponent;
  let fixture: ComponentFixture<OldDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
