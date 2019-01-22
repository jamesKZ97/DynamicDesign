import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkNavbarComponent } from './dark-navbar.component';

describe('DarkNavbarComponent', () => {
  let component: DarkNavbarComponent;
  let fixture: ComponentFixture<DarkNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
