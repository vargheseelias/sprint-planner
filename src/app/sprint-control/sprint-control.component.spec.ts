import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintControlComponent } from './sprint-control.component';

describe('SprintControlComponent', () => {
  let component: SprintControlComponent;
  let fixture: ComponentFixture<SprintControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
