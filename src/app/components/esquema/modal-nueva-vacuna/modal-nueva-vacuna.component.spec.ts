import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaVacunaComponent } from './modal-nueva-vacuna.component';

describe('ModalNuevaVacunaComponent', () => {
  let component: ModalNuevaVacunaComponent;
  let fixture: ComponentFixture<ModalNuevaVacunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNuevaVacunaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalNuevaVacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
