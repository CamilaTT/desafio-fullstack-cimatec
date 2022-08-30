import { ModalComponent } from './../../components/modal/modal.component';
import { ChartService } from 'src/app/services/chart.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Veiculo, Veiculos } from '../../models/veiculos/vehicles';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  initialId = 1;
  vehiclesList: Veiculos = []
  selectedVehicle: Veiculo | null = null

  @ViewChild(ModalComponent) modalComponent!: ModalComponent

  constructor(
    private vehicleService: VehicleService, private chartService: ChartService
  ) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(res => {
      this.vehiclesList = res.vehicles;
    })

    this.vehicleService.getSelectedVehicle(this.initialId).subscribe(
      value => this.selectedVehicle = value[0]
    )
  }

  selectVehicle(e: any) {
    const ID = e.target.value
    return this.vehicleService.getSelectedVehicle(ID).subscribe(value => {
        this.selectedVehicle = value[0]
        this.chartService.chartsUpdates(ID)
    })
  }
}
