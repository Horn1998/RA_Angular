import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-head-component',
  templateUrl: './head-component.component.html',
  styleUrls: [
    './head-component.component.css',
  ]
})
export class HeadComponent implements OnInit {
  @Output() childEvent = new EventEmitter<any>();
  public theme:boolean = true
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.childEvent.emit(this.theme)
    
  }
}
