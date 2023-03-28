import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/cotact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit{
  
  listaContacto: IContacto[]=[
    {
      id:0,
      nombre:'martin',
      apellidos: 'Don Jose',
      email: 'marjose@gmail.com'
    },
    {
      id:1,
      nombre:'pedro',
      apellidos: 'perez',
      email: 'pepe@gmail.com'
    },
    {
      id:2,
      nombre:'carla',
      apellidos: 'gomez',
      email: 'carla@gmail.com'
    }
  ]
    
  constructor(private router:Router){}
  
  ngOnInit(): void {


  }
  //Ejemplo paso de informacion entre ccomponentes
  volverAHome(contacto: IContacto){
    let navigationExtras: NavigationExtras ={
      state:{
        data:contacto
      }
    }
    this.router.navigate(['/home'], navigationExtras);
  }


}
