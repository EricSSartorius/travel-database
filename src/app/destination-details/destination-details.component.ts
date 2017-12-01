import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Destination } from '../destination';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.scss']
})
export class DestinationDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private destinationService: DestinationService,
    private location: Location
  ) { }
  destination: Destination;

  ngOnInit(): void {
    this.getDestination();
  }

  getDestination(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.destinationService.getDestination(id)
      .subscribe(result => this.destination = result);
  }

  goBack(): void {
    this.location.back();
  }
}