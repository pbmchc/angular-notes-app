import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoteDetailsComponent } from './notes/note/note-details.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { CreateNoteComponent } from './notes/note/create-note.component';
import { FilterNotesComponent } from './notes/notes-filter/filter-notes.component';
import { FilterNotesBreadcrumbsComponent } from './notes/notes-filter/filter-notes-breadcrumbs.component';
import { UpdateNoteComponent } from './notes/note/update-note.component';
import { DeleteNoteComponent } from './notes/note/delete-note.component';

import { NotesService } from './notes/notes.service';

import { PrioritiesPipe } from './notes/notes-priorities.pipe';
import { FilterNotesPipe } from './notes/notes-filter/filter-notes.pipe';
import { DisplayFilterPipe } from './notes/notes-filter/filter-notes-breadcrumbs.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NoteDetailsComponent,
    NotesListComponent,
    CreateNoteComponent,
    FilterNotesComponent,
    FilterNotesBreadcrumbsComponent,
    UpdateNoteComponent,
    DeleteNoteComponent,
    PrioritiesPipe,
    FilterNotesPipe,
    DisplayFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
