import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsComponent } from './pets/pets.component';

import { NewComponent } from './pets/new/new.component';
import { UpdateComponent } from './pets/update/update.component';
import { DetailsComponent } from './pets/details/details.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  // the ** will catch anything that did not match any of the above routes
  {path: 'pets', component: PetsComponent},
  //this is connecting the child component(pets component) to the parent component(app component)
  {path: 'pets/newpet', component: NewComponent},
  //had to change the app.post name to newpet in the routes.js to get this work. If this button just goes to the page, why is it an app.post?
  {path: 'pets/:id/edit', component: UpdateComponent},
  {path: 'pets/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
