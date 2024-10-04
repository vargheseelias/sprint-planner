import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../Story';

@Component({
  selector: 'app-sprint-selected-stories',
  templateUrl: './sprint-selected-stories.component.html',
  styleUrls: ['./sprint-selected-stories.component.scss']
})
export class SprintSelectedStoriesComponent implements OnInit {
  @Input() selectedStories:Story[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
