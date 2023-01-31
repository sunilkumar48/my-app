import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { GradeComponent } from './grade/grade.component';
import { DirectivesComponent } from './directives/directives.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CarsComponent } from './cars/cars.component';
import { SchoolfeeComponent } from './schoolfee/schoolfee.component';
import { PipesComponent } from './pipes/pipes.component';
import { PhonesComponent } from './phones/phones.component';
import { VechileComponent } from './vechile/vechile.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { StudentComponent } from './student/student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { AdavancecalculatorComponent } from './adavancecalculator/adavancecalculator.component';
import { MailComponent } from './mail/mail.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductComponent } from './product/product.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { CartComponent } from './cart/cart.component';
import { RatingComponent } from './rating/rating.component';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';
import { AboutUsModule } from './about-us/about-us.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    RectangleComponent,
    SquareComponent,
  
    GradeComponent,
       DirectivesComponent,
       AccountsComponent,
       CarsComponent,
       SchoolfeeComponent,
       PipesComponent,
       PhonesComponent,
       VechileComponent,
       ProductsComponent,
       StudentComponent,
       CreateVehicleComponent,
       CreateStudentsComponent,
       AdavancecalculatorComponent,
       MailComponent,
       VehicleDetailsComponent,
       CreateUserComponent,
       ParentComponent,
       ChildComponent,
       ProductComponent,
       NavigatorComponent,
       CartComponent,
       RatingComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
