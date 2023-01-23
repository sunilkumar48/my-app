import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  constructor(private _vechileService:VechileService){}
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
   submit(){
    console.log(this.vehicleform.value)
    this._vechileService.createVehicles(this.vehicleform.value).subscribe(
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
    