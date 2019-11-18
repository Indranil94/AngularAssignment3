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
  logs:Array<number>;
  data:number;
  constructor(){
    this.display=false;
    this.logs=[];
    this.data=1;
  }

  onDisplay(){
    this.display = !this.display;
    // this.time= (new Date()).toString()
    this.logs.push(this.data);
    this.data++;
    //console.log(this.logs)
  }
}
