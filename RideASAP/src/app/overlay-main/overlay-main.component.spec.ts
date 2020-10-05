import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayMainComponent } from './overlay-main.component';

describe('OverlayMainComponent', () => {
  let component: OverlayMainComponent;
  let fixture: ComponentFixture<OverlayMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
