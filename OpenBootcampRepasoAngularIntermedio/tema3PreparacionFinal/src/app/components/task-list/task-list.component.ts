import { Component, OnInit } from '@angular/core';
import { Itask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  task1:Itask={
    title: 'Task 1',
    description: 'Description 1',
    completed: false,
    level: Levels.Info
  }
  task2:Itask={
    title: 'Task 2',
    description: 'Description 2',
    completed: true,
    level: Levels.Urgent
  }

  constructor(){}

  ngOnInit(): void {
  }

  deleteTask(task:Itask){
    //TODO: Sustituir por un Splice para eliminar de la lista de tareas
    alert(`se procede a eliminar la tarea: ${task.title}`);

  }
}
