import { 
   Component,
   OnInit,
   Input, 
   OnChanges, 
   SimpleChanges, 
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy,
   ElementRef,
   ViewChild,
   ContentChild
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
 OnInit,
 OnChanges,
 DoCheck, 
 AfterContentInit, 
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy 
 {
  @Input() element!: {
    type:string,
    name:string,
    content:string
  }
  @Input() name!: string;
  @ViewChild('heading',{static: true}) header!: ElementRef;
  @ContentChild('contentParagrapgh', {static: true}) paragrapgh!: ElementRef;

  constructor() { 
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
    console.log(`Text Content:..... ${this.header.nativeElement.textContent}`)
    console.log(`Text Content of Paragrapgh: ${this.paragrapgh.nativeElement.textContent}`)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit called')
    console.log(`Text Content of Paragrapgh: ${this.paragrapgh.nativeElement.textContent}`)
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit called')
    console.log(`Text Content:..... ${this.header.nativeElement.textContent}`)
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked called')
  }

  ngOnDestroy(): void {
    console.log('OnDestroy called')
  }

}
