import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  
{
  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Tork", "Capitan America"];
  heroeBorrado: string = "";


  borrarHeroe():void
  {
    this.heroeBorrado = this.heroes.pop() || "";
    console.log(this.heroeBorrado);
  }
}

