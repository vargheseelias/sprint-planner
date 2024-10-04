import { Component } from '@angular/core';
import { Story } from './Story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stories: Story[] = [];

  addStory(newStory: Story) {
    if (!this.stories.some(story => story.title === newStory.title)) {
      this.stories.push(newStory);
    } else {
      alert('Story already exists!');
    }
  }
  clearStories() {
    this.stories = [];
  }

  clearSelectedStories() {
    this.stories = this.stories.filter(story => !story.selected);
  }
}
