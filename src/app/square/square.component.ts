import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  public length:number=0;
  public result:number=0;

  mul(){
    this.result=(this.length*this.length)
  }
  mul2(){
    this.result=4*(this.length)
  }

}
