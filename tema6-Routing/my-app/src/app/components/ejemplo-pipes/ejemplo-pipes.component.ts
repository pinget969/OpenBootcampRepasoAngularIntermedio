import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/cotact.interface';
import { IJugador } from 'src/app/models/jugador.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit{
  dob: Date = new Date(1991, 9, 15);
  cambio: boolean = true;

  numero_PI:number = 3.1415026535897;

  precioCarrito: number=100;

  persona: IContacto={
    id:0,
    nombre:'Javier',
    apellidos:'San soeé',
    sexo:'Masculino',
    email:'javier@hotmail.com'
  }
  cantidad:number=0.3512;
  textoLargo:string = 'Lorem 20 escribeindo un loren de manera manual.';
  //Ejemplo Calculador puntos por PIPES
  jugador1:IJugador={
    nombre:'Martin',
    puntos: [10,30,50,0]
  }
  jugador2:IJugador={
    nombre:'Javier',
    puntos: [2,3,30,10]
  }
  constructor(){}

  ngOnInit(): void {
  }

    get dateFormat(){
      return this.cambio? 'shortDate':'fullDate'
    }

  cambiarFormato(){
    this.cambio = !this.cambio;
  }
}
