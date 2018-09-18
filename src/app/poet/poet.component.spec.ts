import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetComponent } from './poet.component';

describe('PoetComponent', () => {
  let component: PoetComponent;
  let fixture: ComponentFixture<PoetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
