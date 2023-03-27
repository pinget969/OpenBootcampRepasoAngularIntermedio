import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Nos dirá el contenido de la URL
import { IContacto } from 'src/app/models/cotact.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit{
  id:any | undefined;
  contacto:IContacto | undefined;
  filtroPrevio:string='todos';

  constructor(private route:ActivatedRoute ){}
  ngOnInit(): void {
    //params nos devuelve un observable con parametros
    this.route.params.subscribe(
      (params:any) => {
        if(params.id){
          this.id = params.id;
        }
      }
    )
    //Leyendo del estado del contacto
    if(history.state.data){  //obtenemos acceso al cotacto
    this.contacto = history.state.data;
    }
    if(history.state.filtro){ 
      this.filtroPrevio = history.state.filtro;
      }
  }
}
