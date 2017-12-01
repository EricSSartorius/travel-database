// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';

// Services
import { InMemoryDataService } from './in-memory-data.service';
import { DestinationService } from './destination.service';

// Filters
import { FilterPipe } from './filter.pipe';

// Components
import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationFormComponent } from './destination-form/destination-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    DestinationDetailsComponent,
    DestinationFormComponent,
    HomeComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // Simulates server responses for mock API calls.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [DestinationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
