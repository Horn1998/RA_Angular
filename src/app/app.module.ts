/*这个文件是Angular根模块，告诉Angular如何组装应用 */


//BrowserModule,浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
//Angular 核心模块
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN  } from 'ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';




//http请求数据
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';


//根组件
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head-component/head-component.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonComponent } from './Composes/common/common.component';


import { CookieService } from 'ngx-cookie-service';
import { HttpserviceService } from './services/httpservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { SitebarComponent } from './components/sitebar/sitebar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DlHostDirective } from './Directives/dl-host.directive';
import { TemplateComponent } from './Composes/template/template.component';
import { VideoComponent } from './components/video/video.component';


registerLocaleData(zh);


/**@NgModule装饰器，接受一个元数据对象，告诉Angular如何编译和启用应用 */
@NgModule({
  declarations: [/**配置当前项目运行的组件 */
    AppComponent, HeadComponent, LoginComponent,
    RegisterComponent,
    // SiteBarComponent,
    CommonComponent,
    SitebarComponent,
    CarouselComponent,
    HomepageComponent,
    DlHostDirective,
    TemplateComponent,
    VideoComponent,
  ],
  imports: [/**配置当前模块运行依赖的其他模块 */
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, // -> this registers the formbuilder service for your module
    NzFormModule,  
  ],
  providers: [HttpserviceService,CookieService, { provide: NZ_I18N, useValue: zh_CN }],/**配置项目所需要的服务 */
  bootstrap: [AppComponent]/**指定应用的主视图（称为根组件), 通过引导根AppModule来启动应用 */
})
export class AppModule {
  exports:[LoginComponent]

 }