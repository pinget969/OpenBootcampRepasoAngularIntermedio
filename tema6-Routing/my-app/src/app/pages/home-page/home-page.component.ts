import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { NavigationExtras, Router } from '@angular/router';
>>>>>>> 8050d5de427764fcccd81f992aa23297267100e1
import { IContacto } from 'src/app/models/cotact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
<<<<<<< HEAD
  token:string | null = null;
=======
  token: string | null = null;
>>>>>>> 8050d5de427764fcccd81f992aa23297267100e1
  contactoSeleccionado: IContacto | undefined;

  constructor(private router:Router ){}

  ngOnInit(): void {
<<<<<<< HEAD
    //comprobar si el token esta en sessionStorage
    this.token = sessionStorage.getItem('token');
        //leemos del estado del historial de navegacion
        if(history.state.data){
          console.log(history.state.data);
          this.contactoSeleccionado = history.state.data;  
          }
=======
    this.token = sessionStorage.getItem('token');

    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado = history.state.data;
    }
>>>>>>> 8050d5de427764fcccd81f992aa23297267100e1
  }
  navegarAContacto(): void{

    let navigationExtras: NavigationExtras = {
      queryParams:{
        sexo:'todos'
      }
    }

    this.router.navigate(['contacts'], navigationExtras);
  }
}
