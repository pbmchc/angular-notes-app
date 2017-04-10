import { Priority } from './notes-priority.enum';

export interface Note {
    title: string;
    content: string;
    createdOn: Date;
    lastUpdatedOn: Date;
    dueDate: Date;
    priority: Priority;
}


