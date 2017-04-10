import { Component, OnInit, Output } from '@angular/core';
import { Note } from './notes/note.model';
import { NotesService } from './notes/notes.service';

enum NotesViewState {
  display = 0,
  create = 1,
  update = 2, 
  delete = 3
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes: Note[] = [];
  selectedNote: Note;
  updatedNote: Note;
  deletedNote: Note;
  viewState = NotesViewState.display;
  isFilterVisible:boolean = false;
  minDueDate:Date;
  tomorrow: Date;

  notesViewStateRef = NotesViewState;

  constructor(private notesService: NotesService) {
  }

  ngOnInit():void {
    this.notes = this.notesService.get();
    this.selectedNote = this.notes[0];
    this.minDueDate = new Date();
    let tomorrowMiliseconds = new Date().setDate((new Date).getDate() + 1);
    this.tomorrow = new Date(tomorrowMiliseconds);
  }

  onSelectedItem(note: Note):void {
    this.selectedNote = note;
    this.viewState = NotesViewState.display;
  }

  onCreatedItem(note: Note):void {
    this.notesService.push(note);
    this.viewState = NotesViewState.display;
    if (this.notes.length == 1)
      this.selectedNote = note;
  }

  onUpdatedItem(note:Note):void {
    this.notesService.update(note);
    this.selectedNote = note;
    this.viewState = NotesViewState.display;
  }

  onDeletedItem(note:Note):void {

    if (this.checkIfObjectIsEmpty(note))
      this.notesService.deleteAll();
    else
      this.notesService.delete(note);

    this.selectedNote = this.notes.length > 0 ? this.notes[0] : {} as Note;;
    this.viewState = NotesViewState.display;
  }

  createNote():void {
    this.viewState = NotesViewState.create;
  }

  editNote (note: Note):void {
    this.updatedNote = {...note};
    this.viewState = NotesViewState.update;
  }

  deleteNote (note: Note):void {
    this.deletedNote = {...note};
    this.viewState = NotesViewState.delete;
  }

  deleteAllNotes() {
    this.deletedNote = {} as Note;
    this.viewState = NotesViewState.delete;
  }

  toggleFilterVisibility():void {
    this.isFilterVisible = !this.isFilterVisible;
  }

  resetNoteViewState():void {
    this.viewState = NotesViewState.display;
  }

  private checkIfObjectIsEmpty(elementObject:Note):boolean {
    return Object.keys(elementObject).length === 0 && elementObject.constructor === Object;
  }
}
