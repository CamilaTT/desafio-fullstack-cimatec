import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehiclesDataAPI } from 'src/app/models/veiculos/vehicles-data';
import { VeiculosAPI } from 'src/app/models/veiculos/vehicles';
import { API_URL } from 'src/environments/environment.prod';
import { pluck } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class VehiclesDataService {

  constructor(private httpClient: HttpClient) { }

  getVehicleData(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient.get<VehiclesDataAPI>(`${API_URL}vehicleData`, {params})
    .pipe(pluck('vehicleData'))
  }

  getVehicles() {
    return this.httpClient.get<VeiculosAPI>(`${API_URL}vehicle`)
  }
}
