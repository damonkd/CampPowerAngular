import { Component, OnInit } from '@angular/core';
import { UserNew } from '../user-new';
import { UserService } from "../user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  //initialises user
  user = {} as UserNew;

  constructor(
    // injects user service
    private userService: UserService) {

  }

  //takes data from form and sends it to user service to be persisted to database
  onSubmit() {
    this.userService.addUser(this.user).subscribe();
  }

  ngOnInit(): void {
  }

}
