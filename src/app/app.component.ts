import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'try-ngxs';


  changeDiv(div) {

    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');
    let div3 = document.getElementById('div3');

    switch (div) {

      case 'div1':
        div1.style.display = 'inline'
        div2.style.display = 'none'
        div3.style.display = 'none'

        break;
      case 'div2':
        div1.style.display = 'none'
        div2.style.display = 'inline'
        div3.style.display = 'none'
        break;
      case 'div3':
        div1.style.display = 'none'
        div2.style.display = 'none'
        div3.style.display = 'inline'
        break;

    }






  }



}
