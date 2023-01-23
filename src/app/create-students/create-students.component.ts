import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent {
     constructor(private _StudentsService:StudentsService){}
      public studentform:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      city:new FormControl(),
      phone:new FormControl(),
      address:new FormControl(),
      photo:new FormControl(),
      placedIn:new FormControl(),
      salary:new FormControl(),



    }
      )
      submit(){
        console.log(this.studentform.value)
        this._StudentsService.createStudents(this.studentform.value).subscribe(
          (data:any)=>{
            alert("created successfully")
          },
          (err:any)=>{
            alert("internal server error")
          }

        )
      }
}
