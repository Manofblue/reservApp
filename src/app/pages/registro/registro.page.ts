import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //Zona de variables
  //Nombre: Tipo = valor;
  //Nombre = clase(valor);

  persona = new FormGroup({
    rut : new FormControl('',[Validators.required,Validators.pattern("[0-9]{7,8}-[0-9kK]{1}")]),
    nombre : new FormControl('',[Validators.minLength(3),Validators.required, Validators.pattern("[a-z]{3,5}")]),
    fecha_nacimiento : new FormControl(),
    genero : new FormControl()
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Podemos crear metodos

  public registrar():void{
    console.log("Hola, estoy en una consola")
    console.log(this.persona.value)
    alert("Registrado!");
    this.router.navigate(['/login']);
  }
  

}
