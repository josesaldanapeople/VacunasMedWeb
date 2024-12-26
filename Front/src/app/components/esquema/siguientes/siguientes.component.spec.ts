import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiguientesComponent } from './siguientes.component';

describe('SiguientesComponent', () => {
  let component: SiguientesComponent;
  let fixture: ComponentFixture<SiguientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiguientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiguientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
