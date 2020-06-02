import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { MainComponent } from './main/main.component';
import { TextMaskModule } from 'angular2-text-mask';


import{ MatSortModule} from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent] ,
  imports: [BrowserModule,
     AppRoutingModule,
      HttpClientModule,
       TextMaskModule,
        FormsModule,
        BrowserAnimationsModule,
       MatSortModule,
      MatTableModule,
      MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
