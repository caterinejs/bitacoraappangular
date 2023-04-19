import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricomantenimientoComponent } from './historicomantenimiento.component';

describe('HistoricomantenimientoComponent', () => {
  let component: HistoricomantenimientoComponent;
  let fixture: ComponentFixture<HistoricomantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricomantenimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricomantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
