import { Component, Input } from '@angular/core';
import { Note } from '../note.model';
import { Priority } from '../notes-priority.enum';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html'
})
export class NoteDetailsComponent {
  @Input() selectedNote = {} as Note;
  @Input() tomorrow: string;

  priorityRef = Priority;
}
