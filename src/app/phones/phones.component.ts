import { Component } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent {
  public phones:any=[];
  constructor(private _phonesService:PhoneService){
    this.phones=_phonesService.phones;
  }

}
