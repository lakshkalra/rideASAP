import { Component, OnInit } from '@angular/core';
import { Signin } from '../signin';
import { from } from 'rxjs';
import { SigninService } from '../signin.service';
import { TravelService } from '../travel.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  Signindet = new Signin("","");
  errorMsg='';
    constructor(private signinDetails: SigninService,
                private router: Router,private travel: TravelService) {

     }

  ngOnInit(): void {
  }
  onSubmit()
  {
      this.signinDetails.Check(this.Signindet)
    .subscribe(
      data =>{
        console.log('Success!',data);
        this.travel.email=data.email;
        this.travel.name=data.name;
        this.signinDetails.storeUserData(data.token);
        this.router.navigate(['/Home']);
      },
      error => {this.errorMsg=error.error;
        this.router.navigate(['/Sign-In']);}

    )


}
}