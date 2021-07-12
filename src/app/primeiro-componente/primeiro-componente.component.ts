import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeiro-componente',
  // se o primeiro-componente fosse uma classe dentro de uma div, seria chamado como .primeiro-componente e no html <div class="primeiro-componente"></div>
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent { 

  constructor() { }
  
}
