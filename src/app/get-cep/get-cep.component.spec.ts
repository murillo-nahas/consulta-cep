import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCepComponent } from './get-cep.component';

describe('GetCepComponent', () => {
  let component: GetCepComponent;
  let fixture: ComponentFixture<GetCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
