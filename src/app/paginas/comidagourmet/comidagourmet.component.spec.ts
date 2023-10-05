import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidagourmetComponent } from './comidagourmet.component';

describe('ComidagourmetComponent', () => {
  let component: ComidagourmetComponent;
  let fixture: ComponentFixture<ComidagourmetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComidagourmetComponent]
    });
    fixture = TestBed.createComponent(ComidagourmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
