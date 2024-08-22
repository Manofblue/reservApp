import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  //En page.ts podemos crear variables, constrantes, listas, arreglos, json, etc:
  //NOMBRE_VARIABLE: TIPO_DATO = VALOR;
  titulo : string = "Página de login";
  numero : number = 5;
  decimal : number = 5.2;
  exixte : boolean = true;
  fecha_hoy : Date = new Date();
  nombres : string[] = ["Pedro","Juan","Diego"];
  persona : any = {"nombre":"Jeison","edad":5};

  //NgModel:
  email: string ="miCorreo@gmail.com";

  constructor() { }

  ngOnInit() {
  }

}
