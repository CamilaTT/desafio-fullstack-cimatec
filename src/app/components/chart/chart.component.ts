import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/pages/dashboard/services/chart.service';
import { SelectService } from 'src/app/pages/dashboard/services/select.service';
import  ChartDataLabels  from 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables, ChartDataLabels)

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart: any = []

  constructor(
    private chartService: ChartService, private selectService: SelectService
  ) { }

  ngOnInit(): void {
    this.selectService.getSelectedVehicle(1).subscribe(res => {
      this.chartService.drawConnectedChart(res[0])
      this.chartService.drawSoftUpdatesChart(res[0])
    })
  }

}
