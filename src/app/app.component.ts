import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from "./padre/padre.component";
import { FormularioComponent } from "./formulario/formulario.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PadreComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba';
}
