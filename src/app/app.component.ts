import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `.time {
      color: white;
    }`
  ] 
})
export class AppComponent {
  display:boolean;
  logs:Array<Date>;
  constructor(){
    this.display=false;
    this.logs=[];
  }

  onDisplay(){
    this.display = !this.display;
    // this.time= (new Date()).toString()
    this.logs.push(new Date());
    // this.data++;
    //console.log(this.logs)
  }
}
