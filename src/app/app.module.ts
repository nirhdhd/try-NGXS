import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NgxsModule } from '@ngxs/store';
import { ComponentOneState } from './one.state'
import { ComponentTwoState } from './two.state'
import { ComponentThreeState } from './three.state'
import { MatSelectModule } from '@angular/material/select';

import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,

    NgxsModule.forRoot([ComponentOneState, ComponentTwoState, ComponentThreeState], {
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
