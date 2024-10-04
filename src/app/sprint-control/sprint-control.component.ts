import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Story } from '../Story';

@Component({
  selector: 'app-sprint-control',
  templateUrl: './sprint-control.component.html',
  styleUrls: ['./sprint-control.component.scss']
})
export class SprintControlComponent implements OnInit {
  @Input() stories: Story[] = [];
  @Output() clearStories = new EventEmitter<void>();
  @Output() clearSelectedStories = new EventEmitter<Story[]>();
  @Output() autoSelectedStories = new EventEmitter<Story[]>();
  targetPoints: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  autoSelectStories() {
    const sortedStories = this.stories.sort((a, b) => b.points - a.points);
    const selectedStories: Story[] = [];
        let selectedPoints = 0;
    
        sortedStories.forEach((story : Story)=>  {
          if (selectedPoints + story.points <= this.targetPoints) {
            selectedStories.push(story);
            selectedPoints += story.points;
          }
        }
        )
        this.autoSelectedStories.emit(selectedStories);
  }

  clearAllStories() {
    this.autoSelectedStories.emit([]);
    this.clearSelectedStories.emit();
  }

  clearSelected() {
    this.autoSelectedStories.emit([]);
  }

}
