import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Note } from '../note.model';
import { Priority } from '../notes-priority.enum';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnChanges {
  @Input() notes = [] as Note[];
  @Input() filters : string[];
  @Input() activeItem: Note;
  @Input() tomorrow: Date;
  @Output() selectedItem = new EventEmitter<Note>();
  @Output() itemForUpdate = new EventEmitter<Note>();
  @Output() itemForDelete = new EventEmitter<Note>();

  selectedNote: Note;
  priorityRef = Priority;

  ngOnChanges() {
    this.selectedNote = this.activeItem;
  }

  selectItem(note: Note):void {
    this.selectedNote = note;
    this.selectedItem.emit(note);
  }

  selectItemForUpdate(note: Note, event: Event):void {
    this.itemForUpdate.emit(note);
    event.stopPropagation();
  }

  selectItemForDelete(note: Note, event: Event):void {
    this.itemForDelete.emit(note);
    event.stopPropagation();
  }
}
