import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/cotact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit{
  
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
  }

}
