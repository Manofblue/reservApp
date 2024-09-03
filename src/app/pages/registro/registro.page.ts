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
    nombre : new FormControl('',[Validators.required, Validators.pattern("[a-z]{3,5}")]),
    //Si no existen las validaciones, debemos crear un metodo para crearla **TAREA
    fecha_nacimiento : new FormControl('',[Validators.required]),
    genero : new FormControl('',[Validators.required]),
    tiene_equipo : new FormControl('no',[Validators.required]),
    nombre_equipo : new FormControl('',[])
  });

  //boton
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Podemos crear metodos

  public registrar():void{
    //Aqui pueden ir validaciones, DAO, conversiones,etc...
    console.log("Hola, estoy en una consola")
    console.log(this.persona.value)
    alert("Registrado!");
    this.router.navigate(['/login']);
  }

  //boton
  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
  

}
