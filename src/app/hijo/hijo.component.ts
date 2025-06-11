import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Input() nombre: string = '';

  @Output() mensaje = new EventEmitter<string>()

  
  
  emitir(){
    this.mensaje.emit('hola desde el hijo')
  }
}
