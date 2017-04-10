import { PipeTransform, Pipe } from '@angular/core';
import { Priority } from '../notes-priority.enum';

@Pipe({ name: 'displayFilter' })
export class DisplayFilterPipe implements PipeTransform {
    transform(filter:string, index:number):string {  
        return !isNaN(parseInt(filter)) && index == 2 ? Priority[filter] : filter;
    }
}