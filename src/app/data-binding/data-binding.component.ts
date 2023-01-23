import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public age:number=22;
  public name:string='sunil';
  public isindian :boolean=true;
  public phone:number=52;
  test(){
    alert("button clicked")
  }
  test2(){
    alert("button double clicked")
  }
  test3(){
    alert("mouse entered")
  }
  test4(){
    alert("mouse leaved")
  }
  test5(){
    alert("key pressed")
  }
}
