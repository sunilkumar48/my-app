import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  public length:number=0;
  public base:number=0;
  public result:number=0;

mul(){
  this.result=this.length*this.base;
}
mul2(){
  this.result=2*(this.length+this.base);

}

}
