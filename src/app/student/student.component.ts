import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
   public Students:any=[];
   public term:any=[];
   public column:string="";
   public order:string="";
   public limit:number=10;
   
   constructor(private _studentsservice:StudentsService){
    this._studentsservice.getStudents().subscribe(
      (data:any)=>{
        this.Students=data;
      },  
      (err:any)=>{
          alert("internal server error");
      }
      
        
    )    
      
  }
  filter(){
    this._studentsservice.getFilteredStudents(this.term).subscribe(
      (data:any)=>{
        this.Students=data;
      },
      (data:any)=>{
        alert('internala servere error')
      }
    )
  }
  sort(){
    this._studentsservice.getSortedStudents(this.column,this.order).subscribe(
      (data:any)=>{
        this.Students=data;
      },
      (err:any)=>{
        alert("internal server error");
      }

    )
  } 
  page(page:number){
    this._studentsservice.getPagedStudents(this.limit,page).subscribe(
      (data:any)=>{
        this.Students=data;
      },
      (err:any)=>{
        alert("internal server error")
      }

    )
  }
  delete(id:string){
    this._studentsservice.delete(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

    
}
