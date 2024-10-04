import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoryListComponent } from './story-list/story-list.component';
import { SprintControlComponent } from './sprint-control/sprint-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SprintPlannerComponent } from './sprint-planner/sprint-planner.component';
import { SprintSelectedStoriesComponent } from './sprint-selected-stories/sprint-selected-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryFormComponent,
    StoryListComponent,
    SprintControlComponent,
    SprintPlannerComponent,
    SprintSelectedStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
