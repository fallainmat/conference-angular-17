import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldHomeComponent } from './old-home.component';

describe('OldHomeComponent', () => {
  let component: OldHomeComponent;
  let fixture: ComponentFixture<OldHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
