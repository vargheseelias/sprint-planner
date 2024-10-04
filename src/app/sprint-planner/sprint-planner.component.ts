import { Component, OnInit } from '@angular/core';
import { Story } from '../Story';

@Component({
  selector: 'app-sprint-planner',
  templateUrl: './sprint-planner.component.html',
  styleUrls: ['./sprint-planner.component.scss']
})
export class SprintPlannerComponent implements OnInit {
  storyList :Story []=[];
  selectedStories: Story[]=[];
  clearedList: Story[];


  constructor() { }

  ngOnInit(): void {
  }
  updateStoryList(newStory:Story){
    if (!this.storyList.some(story => story.title === newStory.title)) {
      this.storyList.push(newStory);
    } else {
      alert('Story already exists!');
    }
  }
  updateSelectedStories(selectedStoryList)
  {
    this.selectedStories=selectedStoryList;
  }
  clearAll()
  {
    this.storyList=[];
  }
}
