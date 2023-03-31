import { Pipe, PipeTransform } from '@angular/core';
import { IJugador } from '../models/jugador.interface';

@Pipe({
  name: 'calculadorPuntuacion'
})
export class CalculadorPuntuacionPipe implements PipeTransform {

  transform(jugadorValue: IJugador, ...args: unknown[]): string {
    let puntosTotal:number = 0;
    jugadorValue.puntos.forEach((puntuacion)=>{
      puntosTotal +=puntuacion;
    })
    return `${jugadorValue.nombre} ha conseguido ${puntosTotal} puntos en total`; 
  }

}
