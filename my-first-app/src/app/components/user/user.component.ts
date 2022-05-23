import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string = ''
  btnClicked: boolean = false
  id: number = 10
  status: string = 'online'
  users = ['user1', 'user2']

  constructor() {
    this.status = Math.random() > .5 ? 'online' : 'offline'
   }

  ngOnInit(): void {
  }

  onClick() {
   // this.userName = ''
    this.btnClicked = true
    this.users.push(this.userName)
  }

  onRemoveUser(i: number) {
    this.users.splice(i, 1);
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }

}
