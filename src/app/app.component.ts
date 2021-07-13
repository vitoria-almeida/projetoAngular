import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //   template: `
  //    <h1>Olá mundo</h1>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoAngular';
  firstName!: string
  contact!: number
  email!: string
  password!: string
}

// uma classe pode ser várias coisas no Angular, serviços, pipes(?) etc., porém nesse momento ela está sendo especificada como um componente
// o component é um decorator
// propriedades:
// 1. selector: funciona como um seletor de CSS, o app root está sendo chamado pois ele funciona como uma tag no index.html, caso ele fosse um id dentro de uma div, seria chamado como #app-root
// 2. templateUrl: passar url de arquivos que serão "impressos" na tela
// 2.1 é possível utilizar o template ao invés de templateUrl, dessa forma:
  // template: `
  //   <h1>Olá mundo</h1>
  // `, (a crase, ao invés de chave, é para que seja possível quebrar linha)
// 3. styleUrls: passar arquivo de estilização
// 3.1 é possível utilizar apenas o styles 
  // styles: [
  //   `h1 {
  //     color: red;
  //   }`
  // ] <- pega o h1 do index.html