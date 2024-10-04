import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintSelectedStoriesComponent } from './sprint-selected-stories.component';

describe('SprintSelectedStoriesComponent', () => {
  let component: SprintSelectedStoriesComponent;
  let fixture: ComponentFixture<SprintSelectedStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintSelectedStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintSelectedStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
