import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  displayP:boolean = false
  //counter: number = 0
  counterArr : number[]= []
  counterOnDate: Date[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.displayP = !this.displayP
    console.log(this.displayP)
    //this.counter ++
   // console.log(this.counter)
    this.counterArr.push( this.counterArr.length + 1 )
    this.counterOnDate.push( new Date() )
    console.log(this.counterArr)
  }

}
