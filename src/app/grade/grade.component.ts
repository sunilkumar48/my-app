import { Component } from '@angular/core';
import { NotFoundError } from 'rxjs';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent {
  public marks:number=20;
  public grade:number=0;
  Agrade(){
    
  }
  

}
