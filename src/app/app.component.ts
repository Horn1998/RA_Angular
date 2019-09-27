import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RAstage';
  login_success = false;
  show={
    sitebar:"none",
    head:"none",
    outlet:"none",
    login:true
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }
  setAttribute(e)
  {
    console.log(e)
    if(e!=undefined)
    {
      this.login_success = e.login_success
      console.log(e.login_success)
    }
 
 
  }
}
