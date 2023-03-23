import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/cotact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit{
  
  listaContactos: IContacto[]=[
    {
      id:0,
      nombre:'martin',
      apellidos: 'Don Jose',
      email: 'marjose@gmail.com',
      sexo: 'hombre'
    },
    {
      id:1,
      nombre:'pedro',
      apellidos: 'perez',
      email: 'pepe@gmail.com',
      sexo: 'hombre'
    },
    {
      id:2,
      nombre:'carla',
      apellidos: 'gomez',
      email: 'carla@gmail.com',
      sexo: 'mujer'
    }
  ]
  
  constructor(private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    //Obtener los Query Params
    this.route.queryParams.subscribe((params:any)=>{
      console.log('queryParams:',params.sexo)
    })
  }
  volverAHome(contacto:IContacto){
    let navigationExtras: NavigationExtras ={
      state:{
        data: contacto
      }
    }
    this.router.navigate(["/home"],navigationExtras);
  }

}
