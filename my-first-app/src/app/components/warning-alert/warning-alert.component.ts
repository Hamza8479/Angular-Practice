import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  allowNewWarning: boolean = false // property binding
  btnCreated: string = 'No button was created!'
  btnName: string = ''

  constructor() { 
    setTimeout(() => {
      this.allowNewWarning = true
    },2000)
  }

  ngOnInit(): void {
  }

  onBtnCreate() {
    this.btnCreated = `Button was created Name is ${this.btnName}`
  }

  // onUpdateButtonName(event: Event) { this function for when we want one way binding
  //    this.btnName = (<HTMLInputElement>event.target).value
  // }

}
 