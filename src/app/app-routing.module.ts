import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinationsComponent } from './destinations/destinations.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'destination/:id', component: DestinationDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
