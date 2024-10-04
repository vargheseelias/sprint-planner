import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryFormComponent } from './story-form/story-form.component';
import { SprintPlannerComponent } from './sprint-planner/sprint-planner.component';


const routes: Routes = [{
  path:"",component:SprintPlannerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
