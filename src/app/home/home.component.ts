import { Component, OnInit } from '@angular/core';

import { Destination } from '../destination';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private destinationService: DestinationService) { 

  }
  destinations: Destination[] = [];

  ngOnInit() {
    this.getRecentDestinations();
  }

  getRecentDestinations(): void {
    this.destinationService.getDestinations()
      .subscribe(destinations => this.destinations = destinations.reverse().slice(0, 3));
  }
}
