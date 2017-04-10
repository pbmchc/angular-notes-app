import { PipeTransform, Pipe } from '@angular/core';
import { Note } from '../note.model';

@Pipe({ name: 'filterNotes', pure: false })
export class FilterNotesPipe implements PipeTransform {
    transform(notes:Note[], args:string[]):Note[] { 
        let filteredNotes = notes.filter(note=>note.title.toLowerCase().includes(args[0].toLowerCase()));
        if (args[1]){
            let date = new Date(args[1]);
            filteredNotes = filteredNotes.filter(note => note.dueDate.toDateString() === date.toDateString());
        }
        if (args[2]){    
            filteredNotes = filteredNotes.filter(note => note.priority === parseInt(args[2]));
        }
        return filteredNotes;
    }
}