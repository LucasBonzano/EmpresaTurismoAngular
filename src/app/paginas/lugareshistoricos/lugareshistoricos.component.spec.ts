import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugareshistoricosComponent } from './lugareshistoricos.component';

describe('LugareshistoricosComponent', () => {
  let component: LugareshistoricosComponent;
  let fixture: ComponentFixture<LugareshistoricosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LugareshistoricosComponent]
    });
    fixture = TestBed.createComponent(LugareshistoricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
