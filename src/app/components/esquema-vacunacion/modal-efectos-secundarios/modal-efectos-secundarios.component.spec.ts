import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEfectosSecundariosComponent } from './modal-efectos-secundarios.component';

describe('ModalEfectosSecundariosComponent', () => {
  let component: ModalEfectosSecundariosComponent;
  let fixture: ComponentFixture<ModalEfectosSecundariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEfectosSecundariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEfectosSecundariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
