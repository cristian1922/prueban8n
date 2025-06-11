import { Component, Input } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  nombre: string = 'Perro'
  mensaje: string = ''

  resivirMensaje(mensaje: string){
    this.mensaje = mensaje
  }
}
