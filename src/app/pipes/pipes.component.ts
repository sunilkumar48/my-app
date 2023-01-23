import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public name:string='Sunil';
  public date:any=new Date();
  public user:any={name:"sunil",Age:20}
  

}
