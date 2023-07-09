import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyChildComponent } from './my-child/my-child.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Child2Component } from './child2/child2.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { PipePipe } from './pipe.pipe';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { MyDataService } from './services/my-data.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MyChildComponent,
    Child2Component,
    GrandchildComponent,
    PipePipe,
    FlyingHeroesPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
 // providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
