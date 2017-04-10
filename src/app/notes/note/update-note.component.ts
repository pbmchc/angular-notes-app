import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Note } from '../note.model';
import { Priority } from '../notes-priority.enum';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html'
})
export class UpdateNoteComponent implements OnChanges {
  @Input() updatedNote = {} as Note;
  @Input() minDueDate:Date;
  @Output() updatedItem = new EventEmitter<Note>();
  @Output() hideForm = new EventEmitter();

  priorities = Priority;

  ngOnChanges():void {
    //default value setter in case of predefined notes without priority
    if (this.updatedNote.priority == undefined)
      this.updatedNote.priority = Priority.Normal;
  }

  onUpdate():void {
    this.updatedNote.lastUpdatedOn = new Date();
    this.updatedNote.dueDate = new Date(this.updatedNote.dueDate);
    this.updatedNote.priority = Priority[Priority[this.updatedNote.priority]];
    this.updatedItem.emit(this.updatedNote);
  }

  onCancel():void {
    this.hideForm.emit();
  }
}
