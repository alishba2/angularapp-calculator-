import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalulatorApp';

  // public num1:any;
  // public num2 : any;
  // public num3: any;
  // add(){
  //   this.num3 = this.num1 + this.num2;
  // }
  // sub(){
  //   this.num3 = this.num1 - this.num2;
  // }
  // mul(){
  //   this.num3 = this.num1 * this.num2;
  // }
  // divide(){
  //   this.num3 = this.num1 / this.num2;
  // }
  toShow = '0'
  currValue = ''
  
  writetoinput(value:string){
    this.currValue = this.currValue + value;
    this.toShow = this.currValue;
  }
  equals(){
    this.toShow = eval(this.currValue);
  }
  clear(){
    this.currValue= '';
    this.toShow = this.currValue;
  }
}
