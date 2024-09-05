import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.page.html',
  styleUrls: ['./administrar.page.scss'],
})
export class AdministrarPage implements OnInit {

  persona = new FormGroup({
    rut : new FormControl('',[Validators.required,Validators.pattern("[0-9]{7,8}-[0-9kK]{1}")]),
    nombre : new FormControl('',[Validators.required, Validators.pattern("[a-z]{3,5}")]),
    //Si no existen las validaciones, debemos crear un metodo para crearla **TAREA
    fecha_nacimiento : new FormControl('',[Validators.required]),
    genero : new FormControl('',[Validators.required]),
    tiene_equipo : new FormControl('no',[Validators.required]),
    nombre_equipo : new FormControl('',[])
  });

  usuarios:any[]=[];

  //El servicio nos permite trabajar información:
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarios=this.usuarioService.getUsuarios();
  }

  registrar(){
    if( this.usuarioService.createUsuario(this.persona.value) ) {
      alert("Usuario creado con éxito");
      this.persona.reset();
    }else{
      alert("Error!, no se pudo crear el usuario!");
    }
  }

  



}
