import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public ages:number[]=[10,20,30,40];
  public months:string[]=['jan','feb','mar'];
  public states:string[]=['andhra','telangana','karnataka','tamilnadu'];
  public user:any=[
    {name:'sunil',age:22},
    {name:'ramcharan',age:37},
    {name:'chiru',age:68},
    {name:'powrestar',age:52}
  ];
  public products:any=[
    {name:'pen',price:10,quantity:2,rating:3.5},
    {name:'phone',price:20000,quantity:1,rating:4}
  ]
}
