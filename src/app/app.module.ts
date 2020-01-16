import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatFormFieldModule } from '@angular/material'  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { BillComponent } from './bill/bill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { EditComponentComponent } from './edit-component/edit-component.component';


import {MatGridListModule} from '@angular/material/grid-list'; 

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    BillComponent,
    EditComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
  ],
  entryComponents:[EditComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
