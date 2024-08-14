import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirestoreModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore(),
    
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
