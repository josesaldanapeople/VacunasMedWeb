import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquemaVacunacionComponent } from './esquema-vacunacion.component';

describe('EsquemaVacunacionComponent', () => {
  let component: EsquemaVacunacionComponent;
  let fixture: ComponentFixture<EsquemaVacunacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsquemaVacunacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsquemaVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
