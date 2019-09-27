import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonComponent } from './Composes/common/common.component';
  import { HomepageComponent } from './components/homepage/homepage.component'
  import{ CarouselComponent } from './components/carousel/carousel.component'
  import { VideoComponent } from './components/video/video.component';


const routes: Routes = [
  {
      path:'login',component:LoginComponent
  },
  {
      path:'register', component:RegisterComponent
  },
  {
    path:'common', component:CommonComponent,
    children:[
      {path:'spark',component:HomepageComponent},
      {path:'TZPC',component:CarouselComponent},
      {path:'video',component:VideoComponent}
    ]

  },
  {
    path:'Spark', component:HomepageComponent
  },
  {
      path:"**",redirectTo:'login'
  },

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
