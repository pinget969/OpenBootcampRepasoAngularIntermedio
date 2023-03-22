import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Nos dirá el contenido de la URL

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit{
  id:any | undefined;

  constructor(private route:ActivatedRoute ){}
  ngOnInit(): void {
    //params nos devuelve un observable con parametros
    this.route.params.subscribe(
      (params:any) => {
        this.id = params.id;
      }
    )
  }
}
