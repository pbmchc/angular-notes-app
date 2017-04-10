import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'enum'})
export class PrioritiesPipe implements PipeTransform {
    transform(value):object[] {
        let priorities = [];
        for (let priority in value) {
            if (!isNaN(parseInt(priority, 10))) {
                priorities.push({ key: priority, value: value[priority] });
            }
        }
        return priorities;
    }
}