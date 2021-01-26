import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gocode-shop';
  isShowd = true;
  onPress(): void {
   if(this.title){
     this.title = '';
   }else{
    this.title = 'gocode-shop'
   }
  }
}