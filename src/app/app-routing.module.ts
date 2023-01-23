import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { DirectivesComponent } from './directives/directives.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CarsComponent } from './cars/cars.component';
import { SchoolfeeComponent } from './schoolfee/schoolfee.component';
import { PipesComponent } from './pipes/pipes.component';
import { PhonesComponent } from './phones/phones.component';
import { VechileComponent } from './vechile/vechile.component';
import { ProductsComponent } from './products/products.component';
import { StudentComponent } from './student/student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { AdavancecalculatorComponent } from './adavancecalculator/adavancecalculator.component';





const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'square',component:SquareComponent},
    {path:'directives',component: DirectivesComponent},
    {path:'grade',component:GradeComponent},
    {path:'Accounts',component:AccountsComponent},
    {path:'cars',component:CarsComponent},
    {path:'schoolfee',component:SchoolfeeComponent},
    {path:'pipes',component:PipesComponent},
    {path:'phones',component:PhonesComponent},
    {path:'vechile',component:VechileComponent},
    {path:'products',component:ProductsComponent},
    {path:'students',component:StudentComponent},
    {path:'createvehicle',component:CreateVehicleComponent},
    {path:"createstudents",component:CreateStudentsComponent},
    {path:"adavancecalculator",component:AdavancecalculatorComponent}
    
    
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
