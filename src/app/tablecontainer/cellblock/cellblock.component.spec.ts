import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellblockComponent } from './cellblock.component';

describe('CellblockComponent', () => {
  let component: CellblockComponent;
  let fixture: ComponentFixture<CellblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
