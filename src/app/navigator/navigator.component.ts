import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {
  public cartCount:number=0

  constructor(private commonService:CommonService){
    commonService.getvalue().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }

}
