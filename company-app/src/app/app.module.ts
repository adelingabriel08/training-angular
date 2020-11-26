import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './components/company/company.component';
import { CompaniesComponent } from './components/companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
