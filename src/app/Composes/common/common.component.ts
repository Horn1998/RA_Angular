import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import {Router} from '@angular/router'


@Component({
  selector: 'app-common', 
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  // @ViewChild('header',{static:false}) header:any;
  public sitebar_style:boolean = true;
  public navigateTo:string = ""
  constructor(private MyRouter:Router) { }

  ngOnInit() {
       
  }

  getChildTheme(theme)
  {
     this.sitebar_style = theme
  };

  getUrl(url)
  {
    this.navigateTo = '/common/' + url;
    console.log("传入值成功" + url)
    this.MyRouter.navigateByUrl(this.navigateTo)

  };

  redirectTo()
  {
  }


}
