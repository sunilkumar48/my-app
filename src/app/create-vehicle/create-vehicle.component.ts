import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  
  public vehicleform:FormGroup=new FormGroup(
    
    {
      Vehicle:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel:new FormControl(),  
      color:new FormControl(),
      image:new FormControl(),
    }

  )
  public isEdit:boolean=false;
  public id:any="";
  constructor(private _vehicleService:VechileService,private _activatedRoute:ActivatedRoute){
    this._activatedRoute.params.subscribe(
      (data:any)=>{
        this.isEdit=true;
        this.id=data.id;
        _vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicleform.patchValue(data);
          }
        )
      }
    )
  }
   submit(){
    if(this.isEdit){
      this._vehicleService.updateVehicle(this.vehicleform.value,this.id).subscribe(
        (data:any)=>{
          alert("updated successfully");
        },
        (err:any)=>{
          alert("internal server error");
        }
      )
    }
    else{
      this._vehicleService.createVehicle(this.vehicleform.value).subscribe(
        (data:any)=>
        {
          alert("created succssfully")
        },
        (err:any)=>{
          alert("internal server error")
        }
      )
    }
  }
  
}

    