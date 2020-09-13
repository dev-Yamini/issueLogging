import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from './jsonData.service';

import { MatRadioModule } from '@angular/material/radio';
import { FilterPipe } from './filter.pipe';

const routes: Routes = [
  { path: 'data', component: DisplayDataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DisplayDataComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatRadioModule,
    FormsModule
  ],
  exports: [RouterModule,
    MatRadioModule],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
