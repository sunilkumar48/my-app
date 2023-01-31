import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  public vehicle:any={};
  constructor(private _activatedRoute:ActivatedRoute,private _vehicleService:VechileService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this._vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
        
          },
          (err:any)=>{
            alert("internal  server error")
          }

        )

      }
      
      
    )
  }

}
