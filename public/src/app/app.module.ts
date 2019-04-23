import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component'; //when you import the service, it has to match the name of the service.ts file.

import { HttpClientModule } from '@angular/common/http'; //you import this service so you canan make http requests
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.

import { PetsService } from './pets.service';
import { NewComponent } from './pets/new/new.component';
import { DetailsComponent } from './pets/details/details.component';
import { UpdateComponent } from './pets/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    NewComponent,
    DetailsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PetsService], //Has to match up the corressponding service
  bootstrap: [AppComponent] //Has to match up the corressponding service
})
export class AppModule { }
