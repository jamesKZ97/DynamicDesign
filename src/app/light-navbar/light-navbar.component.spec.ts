import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightNavbarComponent } from './light-navbar.component';

describe('LightNavbarComponent', () => {
  let component: LightNavbarComponent;
  let fixture: ComponentFixture<LightNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
