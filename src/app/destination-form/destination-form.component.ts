import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { Destination } from '../destination';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.scss']
})
export class DestinationFormComponent {
  constructor(
    private destinationService: DestinationService,
    private router: Router,
  ) { }
  destination = new Destination;
  destinations: Destination[];
  status = ['Want to go', 'Visited', 'Lived'];

  onSubmit(): void {
    this.destinationService.addDestination(this.destination as Destination)
      .subscribe(result => {
          this.router.navigate(['/destinations']);
      });
  }
}