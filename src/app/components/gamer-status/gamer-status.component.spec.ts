import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerStatusComponent } from './gamer-status.component';

describe('GamerStatusComponent', () => {
  let component: GamerStatusComponent;
  let fixture: ComponentFixture<GamerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamerStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
