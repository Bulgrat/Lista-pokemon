import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
