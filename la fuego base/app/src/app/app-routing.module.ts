import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const routes: Routes = [{
  path: "libros",
  component: LibrosComponent,
  title: "Libros"
},
{
  path: 'main',
  component: MenuComponent,
  ...canActivate(() => redirectUnauthorizedTo(['']))
},{
  path: "",
  component: MenuComponent,
  title: "Menu"
},{
  path: "login",
  component: LoginComponent,
  title: "Login"
},{
  path: "registro",
  component: RegisterComponent,
  title: "Registro"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
