import { API_URL } from 'src/environments/environment.prod';
import { VehicleData, VehiclesDataAPI } from '../models/vehicles/vehicles-data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  getVehicleData(value?: string) {
    const params = value ? new HttpParams().append('value', value) : undefined;
    return this.httpClient.get<VehiclesDataAPI>(`${API_URL}vehicledata`, {params})
    .pipe(map(res => res.vehicleData)
    )
  }

  addVehicleData(vehicleData: VehicleData) {
    return this.httpClient.post<VehicleData>(`${API_URL}vehicledata`, vehicleData)
  }

  updateVehicleData(vehicleData: VehicleData) {
    return this.httpClient.put<VehicleData>(`${API_URL}vehicledata/${vehicleData.id}`, vehicleData)
  }

  deleteVehicleData(id: number ) {
    return this.httpClient.delete<VehicleData>(`${API_URL}vehicledata/${id}`)
  }
}
