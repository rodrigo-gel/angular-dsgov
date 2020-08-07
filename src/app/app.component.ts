import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngdsgov';

  constructor(){
   this.carregarScript();
  }

  carregarScript(){
    const node = document.createElement('script'); 
    node.src = "./assets/dsgov.js";
    node.type = 'text/javascript'; 
    node.async = false; 
    document.getElementsByTagName('body')[0].appendChild(node); 
  }
}

