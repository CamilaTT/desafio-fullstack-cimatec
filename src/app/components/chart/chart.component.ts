import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';
import  ChartDataLabels  from 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';
import { VehicleService } from 'src/app/services/vehicle.service';
Chart.register(...registerables, ChartDataLabels)

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart: any = []

  constructor(
    private chartService: ChartService, private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.vehicleService.getSelectedVehicle(1).subscribe(res => {
      this.chartService.drawConnectedChart(res[0])
      this.chartService.drawSoftUpdatesChart(res[0])
    })
  }

}
