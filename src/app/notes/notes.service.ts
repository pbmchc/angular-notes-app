import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { Priority } from './notes-priority.enum';

@Injectable()
export class NotesService {
    notes = [
      { title: 'First note', content: 'First note sample content', createdOn: new Date(2017, 4, 1, 15, 30), priority: Priority.Normal, dueDate: new Date(2017, 3, 7) },
      { title: 'Second note', content: 'Second note sample content', createdOn: new Date(2017, 4, 2, 16, 30), priority: Priority.High, dueDate: new Date(2017, 3, 11) },
      { title: 'Third note', content: 'Third note sample content', createdOn: new Date(2017, 4, 3, 17, 30), priority: Priority.High, dueDate: new Date(2017, 4, 12) },
      { title: 'Fourth note', content: 'Fourth note sample content', createdOn: new Date(2017, 4, 4, 18, 30), priority: Priority.Low, dueDate: new Date(2017, 4, 12) },
    ] as Note[];

    get(): Note[] {
        return this.notes;
    }

    push(note: Note) {
        this.notes.push(note);
    }

    update(note: Note) {
        let index = this.getNoteIndex(note);
        this.notes[index] = note;
    }

    delete(note: Note) {
        let index = this.getNoteIndex(note);
        this.notes.splice(index, 1);
    }

    deleteAll() {
        this.notes.length = 0;
    }

    private getNoteIndex(note: Note):number {
        return this.notes.map(function(elem) { return elem.createdOn; }).indexOf(note.createdOn);
    }
}
