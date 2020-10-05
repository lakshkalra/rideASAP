import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeModule } from 'angularx-qrcode';


import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { SignComponent } from './sign/sign.component';
import { SigninComponent } from './signin/signin.component';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlayMainComponent } from './overlay-main/overlay-main.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PaymentComponent } from './payment/payment.component';
import { from } from 'rxjs';
import { JourneysComponent } from './journeys/journeys.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    SignComponent,
    SigninComponent,
    OverlayComponent,
    OverlayMainComponent,
    MainpageComponent,
    PaymentComponent,
    JourneysComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
