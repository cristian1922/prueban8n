import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombre: string = ''
  poder: string = ''

  enviar(){
    console.log(this.nombre, this.poder);
    //prueba
  }
}
