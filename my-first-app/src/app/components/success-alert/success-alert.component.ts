import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  message: string = "You achieved string interpolation"
  vid: number = 27
  constructor() { }

  ngOnInit(): void {
  }

  getmessage() {
    return this.message
  }

}
