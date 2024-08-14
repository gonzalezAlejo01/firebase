import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  logeado: boolean

  constructor(){
    this.logeado = false
  }

  ngOnInit(){
    if(localStorage.getItem("clave") != null){
      this.logeado = true
    }
  }

}
