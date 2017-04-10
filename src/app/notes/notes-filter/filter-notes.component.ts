import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { Priority } from '../notes-priority.enum';

@Component({
  selector: 'filter-notes',
  templateUrl: './filter-notes.component.html'
})
export class FilterNotesComponent implements OnInit {

  @Input() isFilterVisible : boolean;
  @Output() filteredNotes = new EventEmitter<string[]>();
  @Output() hideForm = new EventEmitter();

  priorities = Priority;
  filters:string[]=['', '', ''];

  ngOnInit():void {
    this.emitValues();
  }

  onInputChange():void {
    this.emitValues();
  }

  onResetForm():void {
    this.resetValues();
    this.emitValues();
  }

  onHideForm():void {
    this.hideForm.emit();
  }

  private emitValues():void {
    this.filteredNotes.emit(this.filters);
  }

  private resetValues():void {
    this.filters=['', '', ''];
  }
}
