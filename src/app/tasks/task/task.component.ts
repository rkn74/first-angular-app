import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone:false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input({required:true}) task!:Task;
  @Output() complete = new EventEmitter<string>();

  private tasksService = Inject(TasksService);
 

  onCompleteTask(){
     this.complete.emit(this.task.id);
  }
  
  
}
