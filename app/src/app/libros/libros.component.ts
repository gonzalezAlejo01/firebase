import { Component } from '@angular/core';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {


  constructor(private fbservice: FirebaseServiceService){}

  public postLibro(nombre: string, autor: string, editorial: string){
    return this.fbservice.agregarLibro(nombre, autor, editorial)
  }

  public deleteLibro(id: string){
    return this.fbservice.deleteLibros(id)
  }

  public modifyLibro(id: string, nombre: string, autor: string, editorial: string){
    return this.fbservice.putLibro(id, nombre, autor, editorial)
  }
  public logOut(){
    this.fbservice.logOut()
  }
}
