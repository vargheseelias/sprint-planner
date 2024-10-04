import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Story } from '../Story';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.scss']
})
export class StoryFormComponent implements OnInit {
  storyForm: FormGroup;
  @Output() addStory = new EventEmitter<Story>();


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGropup();
  }
  
  createFormGropup(){
    this.storyForm = this.fb.group({
      title: ['', Validators.required],
      points: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.storyForm.valid) {
      const newStory: Story = {
        title: this.storyForm.get('title')?.value,
        points: +this.storyForm.get('points')?.value,
        selected: false
      };
      this.addStory.emit(newStory)
      this.storyForm.reset();
    }
  }


}
