import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TasksComponent,TaskComponent,NewTaskComponent],
    exports:[TasksComponent],
    imports:[CommonModule,FormsModule,SharedModule]
})
export class TaskModule{

}