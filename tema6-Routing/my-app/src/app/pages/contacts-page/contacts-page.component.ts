import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavigationExtras, Router } from '@angular/router';
=======
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
>>>>>>> 8050d5de427764fcccd81f992aa23297267100e1
import { IContacto } from 'src/app/models/cotact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit{
  
<<<<<<< HEAD
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
=======
  filtroSexo: string = 'todos';
  listaContactos: IContacto[]=[];

  constructor(private router:Router, private route:ActivatedRoute, private contactService:ContactService){}
  ngOnInit(): void {
   


    //Obtener los Query Params
    this.route.queryParams.subscribe((params:any)=>{
      console.log('queryParams:',params.sexo)
      if(params.sexo){
        this.filtroSexo = params.sexo
      }
       //Obtener la lista de contacto
      
      this.contactService.obtenerContactos(this.filtroSexo)
      .then(
          (lista) => this.listaContactos=lista
      )
      .catch((error)=> console.error(`ha habido un error al obtener los contactos: ${error}`))
      .finally(()=> console.info(`peticion de contacto finalizada`))
    })
  }

  volverAHome(contacto:IContacto){
    let navigationExtras: NavigationExtras ={
      state:{
        data: contacto
      }
    }
    this.router.navigate(["/home"],navigationExtras);
>>>>>>> 8050d5de427764fcccd81f992aa23297267100e1
  }


}
