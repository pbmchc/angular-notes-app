import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note.model';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html'
})
export class DeleteNoteComponent {
  @Input() deletedNote = {} as Note;
  @Output() deletedItem = new EventEmitter<Note>();
  @Output() hideForm = new EventEmitter();

  onDelete():void {
    this.deletedItem.emit(this.deletedNote);
  }

  onCancel():void {
    this.hideForm.emit();
  }
}
