import { Component, OnInit } from '@angular/core';

import { Destination } from '../destination';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  constructor(private destinationService: DestinationService) { 

  }
  destinations: Destination[];
  destinationCount: number = 0;
  searchText = '';

  ngOnInit() {
    this.getDestinations();
  }

  getDestinations(): void {
    this.destinationService.getDestinations()
      .subscribe(result => {
        this.destinationCount = result.length,
        this.destinations = result;
      });
  }

  delete(destination: Destination): void {
    this.destinations = this.destinations.filter(d => d !== destination);
    this.destinationService.deleteDestination(destination).subscribe(() => this.destinationCount = this.destinations.length);
  }
}