import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit{

  miFormularioValidado: FormGroup = new FormGroup({});
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.miFormularioValidado = this.formBuilder.group({
      nombre:['', Validators.required], //campo obligatorio
      apellido:'',
      //Validadion obligatoria MIN y MAX
      edad:['', Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      //validacion tipo EMAIL
      email:['', Validators.compose([Validators.required, Validators.email])],
      //EXPRESIÓN REGULAR
      password:['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      //obligatorio BOLEANO
      acepta:[false, Validators.requiredTrue]
    })
  }
  get nombre(){
    return this.miFormularioValidado.get('nombre');
  }
  get apellido(){
    return this.miFormularioValidado.get('apellido');
  }
  get edad(){
    return this.miFormularioValidado.get('edad');
  }
  get email(){
    return this.miFormularioValidado.get('email');
  }
  get password(){
    return this.miFormularioValidado.get('password');
  }
  get acepta(){
    return this.miFormularioValidado.get('acepta');
  }

  //Metodo de submit del formulario
  enviarFormulario(){
    if(this.miFormularioValidado.valid){
      console.table(this.miFormularioValidado.value);
      //resetear los campos del formulario.
      this.miFormularioValidado.reset(); //Podemos recurrir al reset porque es un metodo de FormGroup
    }
  }
}
