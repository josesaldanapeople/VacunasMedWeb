import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcentrosComponent } from './modalcentros.component';

describe('ModalcentrosComponent', () => {
  let component: ModalcentrosComponent;
  let fixture: ComponentFixture<ModalcentrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalcentrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalcentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
