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

  constructor() {
    this.status = Math.random() > .5 ? 'online' : 'offline'
   }

  ngOnInit(): void {
  }

  onClick() {
    this.userName = ''
    this.btnClicked = true
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }

}
