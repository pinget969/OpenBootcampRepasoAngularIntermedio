import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{
  
    //Definimos nuestro formulario
    //miFormulario:FormGroup | undefined;
    miFormulario:FormGroup = new FormGroup({});

   //Inyectamos la clase Formbuilder para construir el FormGroup 
  constructor(private formBuilder:FormBuilder){}
  
  ngOnInit(): void {
    //iniciamos los campos del formulario y sus valores por defecto
    this.miFormulario=this.formBuilder.group(
      {
        nombre:'',
        apellido:'',
        email:'',
        telefono:'',
        direccion:''
      }
    );
    //Nos suscribimos a los cambios qeu ocurran en el formulario y lo Muestra por Consola
    this.miFormulario.valueChanges.subscribe(
      console.log
    )
  }

}
