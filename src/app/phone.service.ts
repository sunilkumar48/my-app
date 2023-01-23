import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  public phones:any=[
    {brand:'samsung',model:'galaxygrand2',price:25000},
    {brand:'oneplus',model:'7pro',price:53000}
  ]
}
