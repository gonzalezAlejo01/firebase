import { Component } from '@angular/core';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error: any
  constructor(private fbservice: FirebaseServiceService){
    this.error = ""
  }

  public register(mail: any, password: any){
    console.log("aver")
    this.error = localStorage.getItem("error")
    return this.fbservice.register(mail, password)
  }

  

}
