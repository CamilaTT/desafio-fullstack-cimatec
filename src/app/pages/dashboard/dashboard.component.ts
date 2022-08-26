import { ChartService } from 'src/app/pages/dashboard/services/chart.service';
import { Component, OnInit } from '@angular/core';
import { Veiculo, Veiculos } from '../../models/veiculos/vehicles';
import { SelectService } from './services/select.service';
import { VehiclesDataService } from './services/vehicles-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  initialId = 1;
  vehiclesList: Veiculos = []
  selectedVehicle: Veiculo | null = null

  constructor(
    private vehicleDataService: VehiclesDataService,
    private selectService: SelectService,
    private chartService: ChartService
  ) { }

  ngOnInit(): void {
    this.vehicleDataService.getVehicles().subscribe(res => {
      this.vehiclesList = res.vehicles;
    })

    this.selectService.getSelectedVehicle(this.initialId).subscribe(
      value => this.selectedVehicle = value[0]
    )
  }

  selectVehicle(e: any) {
    const ID = e.target.value
    return this.selectService.getSelectedVehicle(ID).subscribe(value => {
        this.selectedVehicle = value[0]
        this.chartService.chartsUpdates(ID)
      })
  }
}
