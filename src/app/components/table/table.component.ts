import { VehiclesDataService } from 'src/app/pages/dashboard/services/vehicles-data.service';
import { Component, OnInit } from '@angular/core';
import { VehiclesData } from 'src/app/models/veiculos/vehicles-data';
import { FormControl } from '@angular/forms';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  queryField = new FormControl;

  vehiclesData: VehiclesData = [];

  vehicles$ = this.queryField.valueChanges
  .pipe(
    map(value => value.trim()),
    filter(value => value.length > 5),
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap((value) =>
      this.vehiclesDataService.getVehicleData(value)
    ),
    filter(value => value.length < 2)
  )

  constructor(private vehiclesDataService: VehiclesDataService) { }

  ngOnInit(): void {
  }

}
