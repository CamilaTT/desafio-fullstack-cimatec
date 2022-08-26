import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';
import { SelectService } from './select.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  connectedChart: any = []
  softUpdatesChart: any = []

  constructor(private selectService: SelectService) { }

  chartsUpdates(s: any) {
    this.connectedChart.destroy()
    this.softUpdatesChart.destroy()
    this.selectService.getSelectedVehicle(s).subscribe(res => {
      this.drawConnectedChart(res[0]);
      this.drawSoftUpdatesChart(res[0]);
    })
  }

  drawConnectedChart(res: any) {
    let percent_conect = res.connected*100/res.totalSales
    let percent_notConect = 100-percent_conect

    this.connectedChart = new Chart('canvas_connected', {
      type: 'doughnut',
      data: {
        labels: ['Não conectados', 'Conectados'],
        datasets: [
          {
            data: [
              percent_notConect.toFixed(1),
              percent_conect.toFixed(1)
            ],
            backgroundColor: [
              '#DCDCDC',
              '#00274E'
            ],
            hoverOffset: 4
          },
        ]
      },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              labels: {
                usePointStyle: true
              },
              position: 'bottom'
            },
            datalabels: {
              font: {
                weight: 'bold',
                size: 13
              },
              color: '#ffffff',
              formatter: (value) => value +'%'
            }
          },
          cutout: '40%',
        }
      })
    }

  drawSoftUpdatesChart(res: any) {
    let percent_softUpdates = res.softwareUpdates*100/res.totalSales
    let percent_notUpdated = 100-percent_softUpdates

    this.softUpdatesChart = new Chart('canvas_softUpdates', {
      type: 'doughnut',
      data: {
        labels: ['Não atualizados', 'Atualizados'],
        datasets: [
          {
            data: [
              percent_notUpdated.toFixed(1),
              percent_softUpdates.toFixed(1)
            ],
            backgroundColor: [
              '#DCDCDC',
              '#00274E'
            ],
            hoverOffset: 4
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              usePointStyle: true
            },
            position: 'bottom'
          },
          datalabels: {
            font: {
              weight: 'bold',
              size: 13
            },
            color: '#ffffff',
            formatter: (value) => value +'%'
          }
        },
        cutout: '40%'
      }
    })
  }
}
