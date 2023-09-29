import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VihaanComponent } from './vihaan/vihaan.component';
import { InterpolBindingComponent } from './interpol-binding/interpol-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
import { StructDirsComponent } from './struct-dirs/struct-dirs.component';
import { AttrDirsComponent } from './attr-dirs/attr-dirs.component';
import { MycolorDirective } from './directives/mycolor.directive';
import { EmployeesComponent } from './employees/employees.component';
import {HttpClientModule} from '@angular/common/http';
import { PredefinedPipesComponent } from './predefined-pipes/predefined-pipes.component';
import { MyTitleCasePipe } from './pipes/my-title-case.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component'
@NgModule({
  declarations: [
    AppComponent,
    VihaanComponent,
    InterpolBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    StructDirsComponent,
    AttrDirsComponent,
    MycolorDirective,
    EmployeesComponent,
    PredefinedPipesComponent,
    MyTitleCasePipe,
    ParentComponent,
    ChildComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
