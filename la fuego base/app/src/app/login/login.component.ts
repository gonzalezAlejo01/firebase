import { Component } from '@angular/core';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: any
  constructor(private fbservice: FirebaseServiceService){
    this.error = ""
  }
  public login(email: string, password: string){
    return this.fbservice.login(email, password)
  }
  public loginWithGoogle(){
    return this.fbservice.registerGoogle()
  }
}
