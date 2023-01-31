import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vechile',
  templateUrl: './vechile.component.html',
  styleUrls: ['./vechile.component.css']
})
export class VechileComponent {

  public vehicles:any = [];
  public column:string="";
  public order:string="";
  public limit:number=10;
  public term:any=[];
  

  constructor(private _vechileService:VechileService,private _router:Router){
    _vechileService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  filter(){
    this._vechileService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
    
  }
  sort(){
    this._vechileService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("internal serverv error")
      }
    )
  }
  page(page:number){
    this._vechileService.getPagedVehicles(this.limit,page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("internal server error")
      }
      
    )
  }
  delete(id:string){
    this._vechileService.delete(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  view(id:any){
    this._router.navigateByUrl("/dashboard/vehicle-details/"+id)

  }
  edit(id:any){
    this._router.navigateByUrl("/dashboard/edit-vehicle/"+id)

  }

}
