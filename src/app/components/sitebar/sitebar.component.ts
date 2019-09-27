import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-sitebar',
  templateUrl: './sitebar.component.html',
  styleUrls: ['./sitebar.component.css']
})
export class SitebarComponent implements OnInit {
  @Input() theme:boolean = true;
  @Output() navigateTo = new EventEmitter<any>();
  public  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  public api  = "http://localhost:8000/template";
  public sitebar_Items ;
  public result =[];  
  constructor(private http:HttpClient, private myRouter:Router) { }
  ngOnInit() {
    
    this.http.post(this.api, {}, this.httpOptions).subscribe((response:any)=>{
      if(response.answer != undefined)
        {
          console.log(response.answer[0],response.answer.Type)
          this.sitebar_Items = response.answer;  
          this.make_dict()
        }
      else
        console.log("没有数据")
    })
    
  }

  navigate(value: string): void {
    console.log(value)
    this.navigateTo.emit(value)
  }
  /**生成字典格式数据
 map:
1: {title: "特征爬虫"}
2: {title: "Spark"}
scale: 0
title: "特征库"
2: {1: {…}, 2: {…}, 3: {…}, 4: {…}, scale: 0, title: "特征处理"}
3: {1: {…}, 2: {…}, scale: 0, title: "特征选择"}
4: {scale: 0, title: "样本库"}
5: {1: {…}, 2: {…}, 3: {…}, 4: {…}, 5: {…}, scale: 0, title: "模型训练"}
 */
  make_dict(){
    let return_dict ={}
    for(var item in this.sitebar_Items)
    {
      if(this.sitebar_Items[item][2] == 0)
      {
          var signal =this.sitebar_Items[item][1];
          return_dict[signal] = {};
          return_dict[signal]["scale"] = 0;
          return_dict[signal]["title"] = this.sitebar_Items[item][0];
          return_dict[signal]["children"] = []
          return_dict[signal]["open"] = false
          return_dict[signal]["url"] = this.sitebar_Items[item][3];
      }
     
    }  
    for(var item in this.sitebar_Items)
    {
      if (this.sitebar_Items[item][2] != 0)
      {
          var signal =this.sitebar_Items[item][1];
          for(var fitem in return_dict)
          {
            if(signal == fitem)
            {
                return_dict[signal]["children"].push({"title":this.sitebar_Items[item][0],"url":this.sitebar_Items[item][3]});
    
            }
          }
      }
    }
    console.log(return_dict)
    for(var key in return_dict)
    {
      this.result.push(return_dict[key])
    }
    // this.result = [return_dict];
    console.log(this.result);
  }
  
}
