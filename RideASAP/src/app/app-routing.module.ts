import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignComponent} from './sign/sign.component';
import {SigninComponent} from './signin/signin.component';
import {OverlayComponent} from './overlay/overlay.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { OverlayMainComponent } from './overlay-main/overlay-main.component';
import { PaymentComponent } from './payment/payment.component';
import { JourneysComponent } from './journeys/journeys.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'Sign-Up',
    pathMatch: 'full' 
  },
  {
  path: 'Sign-Up',
  component: SignComponent
  },
  {
    path: 'Sign-In',
    component: SigninComponent
    },
    {
    path: 'Menu',
    component: OverlayComponent
  },
  {
    path:'Menu-options',
    component:OverlayMainComponent 
  },
  {
    path: 'Home',
    component: MainpageComponent
  },
  {
    path:'Ticket',
    component: PaymentComponent
  },
  {
    path:'Journeys',
    component: JourneysComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
