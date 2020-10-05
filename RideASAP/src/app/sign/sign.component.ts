import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { SignupService } from 'src/app/signup.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  

  constructor(private signupDetails: SignupService,
              private router: Router) {
    
   }

  ngOnInit(): void {
  }
  userModel = new User("","","","","","");
  errorMsg = '';
  passbool=false;
  confpass : string;
  passcheck()
  {
    if(this.userModel.password==this.confpass)
    {
      this.passbool=true;
    //  return this.passbool;
    }
  }
  onSubmit()
    {
      console.log(this.userModel);
        this.signupDetails.enroll(this.userModel)
      .subscribe(
        data => {console.log("Success!!!",data);
        this.router.navigate(['/Sign-In']);},
        error => {this.errorMsg=error.error;
                  this.router.navigate(['/Sign-Up']);}
      )
    }

}
