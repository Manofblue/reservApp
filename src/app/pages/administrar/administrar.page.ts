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
  buscar(rut_buscar:string){
    this.persona.setValue(this.usuarioService.getUsuario(rut_buscar));
    }
  
  modificar(){ 
    //Aqui como tenemos problemas con los nulls, creamos una variable para asignarle un valor si o si(aunque esté vacio "")
    var rut_buscar:string= this.persona.controls.rut.value || "";
    if(this.usuarioService.updateUsuario( rut_buscar , this.persona.value)){
      alert("USUARIO MODIFICADO CON EXITO!")
    }else{
      alert("Error!, No se ha modificado nada")
    }
  } 

  eliminar(rut_eliminar:string){
    //podemos usar console.log(rut_eliminar) para verificar si estamos rescatando bien el dato
    if(this.usuarioService.deleteUsuario(rut_eliminar)){
      alert("Usuario eliminado con éxito")
    }else{
      alert("Error!. Usuario no eliminado")
    }
  }


  



}
