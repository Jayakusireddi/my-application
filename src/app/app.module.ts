import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagrnotfoundComponent } from './pagrnotfound/pagrnotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { PowerComponent } from './power/power.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { CartComponent } from './cart/cart.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { YearsPipe } from './years.pipe';
import { PercentagePipe } from './percentage.pipe';
import { CarsComponent } from './cars/cars.component';
import { StarComponent } from './star/star.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import { HooksComponent } from './hooks/hooks.component';
import {HttpClientModule} from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PostComponent } from './post/post.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { BoredomComponent } from './boredom/boredom.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ProductVehicleComponent } from './product-vehicle/product-vehicle.component';
import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagrnotfoundComponent,
    CalculatorComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    RectangleComponent,
    SquareComponent,
    PowerComponent,
    EventRegistrationComponent,
    EmployeeRegistrationComponent,
    CartComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    YearsPipe,
    PercentagePipe,
    CarsComponent,
    StarComponent,
    GpayComponent,
    BankComponent,
    HooksComponent,
    VehicleComponent,
    PostComponent,
    FlipkartComponent,
    EmailComponent,
    BoredomComponent,
    BankDetailsComponent,
    VehicleDetailsComponent,
    CreateAccountComponent,
    CreateVehicleComponent,
    CreateUserComponent,
    ProductVehicleComponent,
    CreateProductComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
