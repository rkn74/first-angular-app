import { Component, EventEmitter, Input, output, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import {User} from './user.model';

// type Users ={
//   id:string;
// avatar:string;
// name:string;
// }



@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
// @Input({required:true}) id!:string;
// @Input({required:true}) avatar!:string;
// @Input({required:true}) name!:string;
  
@Input({required:true}) user!:User;
@Output() select = new EventEmitter<string>();
@Input({required:true}) selected!: boolean;


get imagePath(){
  return 'assets/users/'+ this.user.avatar;
}

onUserSelected(){
 this.select.emit(this.user.id);
}

}
