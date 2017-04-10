import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note.model';
import { Priority } from '../notes-priority.enum';

@Component({
  selector: 'filter-breadcrumbs',
  templateUrl: './filter-notes-breadcrumbs.component.html',
  styleUrls: ['./filter-notes-breadcrumbs.component.css']
})
export class FilterNotesBreadcrumbsComponent {

  @Input() filters:string[];

  priorityRef = Priority;

  resetFilter(index:number){
    this.filters[index] = '';
  }
}
