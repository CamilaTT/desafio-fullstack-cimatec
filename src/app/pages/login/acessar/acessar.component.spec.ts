import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AcessarComponent } from './acessar.component';

describe('AcessarComponent', () => {
  let component: AcessarComponent;
  let fixture: ComponentFixture<AcessarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessarComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
