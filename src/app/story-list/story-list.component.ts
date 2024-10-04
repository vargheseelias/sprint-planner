import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../Story';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {
  @Input() storyList: Story[] = [];

  toggleSelect(story: Story) {
    story.selected = !story.selected;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
