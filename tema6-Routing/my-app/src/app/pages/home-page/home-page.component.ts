import { Component, OnInit } from '@angular/core';
 
import { NavigationExtras, Router } from '@angular/router';
 
import { IContacto } from 'src/app/models/cotact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
 
  token: string | null = null;
 
  contactoSeleccionado: IContacto | undefined;

  constructor(private router:Router ){}

  ngOnInit(): void {
 
    //comprobar si el token esta en sessionStorage
    this.token = sessionStorage.getItem('token');
        //leemos del estado del historial de navegacion
        if(history.state.data){
          console.log(history.state.data);
          this.contactoSeleccionado = history.state.data;  
          }
 
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
