import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public userForm:FormGroup=new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(4)]),
    age:new FormControl("",[Validators.required,Validators.max(1),Validators.min(150)]),
    phone:new FormControl("",[Validators.required,Validators.min(1000000000),Validators.max(9999999999),Validators.min(10),Validators.max(11)]),
    address:new FormGroup({
      state:new FormControl("",[Validators.required,Validators.minLength(1)]),
      pin:new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
    type:new FormControl(),
    busfee:new FormControl(),
    hostelfee:new FormControl(),
    cards:new FormArray([])
  })
  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray
  }
  add(){
    this.cardsFormArray.push(
      new FormGroup({
        cardNo:new FormControl(),
        cardHolderName:new FormControl(),
        cardExpirary:new FormControl(),
        cvv:new FormControl("",[Validators.required,Validators.min(100),Validators.max(999)])
      })
    )
  }
  submit(){
    console.log(this.userForm.value);
  }
  del(i:any){
     this.cardsFormArray.removeAt(i);

  }

}
