import { Injectable } from '@angular/core';
import {Observer, Observable} from 'rxjs'
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor() {}
  //异步方法1-回调函数（无返回值的异步函数）
  getCallbackdata(cb){
    setTimeout(()=>{
      var name = "张三";
      cb(name)
      return name;
    },1000)
  }

  /**
   * 外部调用
   * this.async.getCallbackdata((data)=>{
   * console.log(data);
   * })
   */

   //异步方法2-Promise
   getPromisedata(){
     return new Promise((resolve, reject)=>{
       setTimeout(()=>{
          var  username=""
          resolve(username) //成功的回调函数
          reject("返回值失败")//失败回调函数
     },2000)
   })
  }
   /**
    * 外部调用
    * this.promise = this.async.getPromisedata();
    * this.promise.then((data)=>{
    *   console.log(data)
    * })
    */


    //异步方法3-Rxjs 
    getRxjsdata(){
        return new Observable(observer=>{
          setTimeout(()=>{
            var  username=""
            observer.next(username) //成功的回调函数
            observer.error("返回值失败")//失败回调函数
       },3000)
      })
    }

    // Rxjs-订阅后多次执行

    getFluentdata(){
      return new Observable(observer=>{
        var count = 0
        setInterval(()=>{
          observer.next(count++) //成功的回调函数
          observer.error("返回值失败")//失败回调函数
     },3000)
    })
  }

    /**
     * 外部调用
     * var rxjsData = this.async.getRxjsdata()
     * var d = rxjsData.subscribe((data)=>{
     *    console.log(data)
     * })
     * 
     * 
     * var rxjsIntervalData = this.async.getFluentdata()
     * rxjsIntervalData.pipe(
     * 对异步获取的数据（reslove)进行过滤
     * filter(value){
     * if (value%2)==0
     * return true;
     * else
     * return false
     * },
     * 对异步获取的数据（reslove)进行转化
     * map(value){
     * return value*value
     * )}.subscribe((data)=>{
     *    console.log(data)
     * })
     * 
     * 
     * 
     * Rxjs-取消订阅
     * setTimeout(()=>{
     * d.unsubscrbe()},1000)
     * 一秒钟后取消订阅
     * 
     */





}
