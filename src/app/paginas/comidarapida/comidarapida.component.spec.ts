import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidarapidaComponent } from './comidarapida.component';

describe('ComidarapidaComponent', () => {
  let component: ComidarapidaComponent;
  let fixture: ComponentFixture<ComidarapidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComidarapidaComponent]
    });
    fixture = TestBed.createComponent(ComidarapidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
