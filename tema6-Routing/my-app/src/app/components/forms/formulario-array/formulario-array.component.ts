import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit{

  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {

    this.miFormularioArray = this.formBuilder.group({
      nombre:'',
      apellido:'',
      telefonos: this.formBuilder.array([]) //Inicializamos la lista de teléfonos vacía
    })
 
  }

  get telefonosFormulario():FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray
  }

  //Método para añadir Teléfonos a la lista
  agregarTelefono(){
    //Creamos un grupo teléfono
    const telefonoNuevo=this.formBuilder.group({
      prefijo:'',
      numero:''
    });
    //Añadimos el grupo a la lista de teléfonos
    this.telefonosFormulario.push(telefonoNuevo);
  }

  //Método para eliminar teléfonos de la lista
  eliminarTelefono(index:number){
    this.telefonosFormulario.removeAt(index);
  }
}
