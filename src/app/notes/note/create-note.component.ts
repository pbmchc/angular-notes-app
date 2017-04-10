import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { Priority } from '../notes-priority.enum';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html'
})
export class CreateNoteComponent implements OnInit {
  @Input() minDueDate:Date;
  @Output() createdItem = new EventEmitter<Note>();
  @Output() hideForm = new EventEmitter();

  newNote = {} as Note;
  priorities = Priority;

  ngOnInit():void {
    //set defaults
    this.newNote.priority = Priority.Normal;
    this.newNote.dueDate = this.minDueDate;
  }

  onSubmit():void {
    this.newNote.createdOn = new Date();
    //avoid saving data as pure strings
    this.newNote.dueDate = new Date(this.newNote.dueDate);
    this.newNote.priority = Priority[Priority[this.newNote.priority]];
    this.createdItem.emit(this.newNote);
    this.newNote = {} as Note;
  }

  onCancel():void {
    this.hideForm.emit();
  }
}
