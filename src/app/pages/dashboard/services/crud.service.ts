import { API_URL } from 'src/environments/environment.prod';
import { VehicleData } from './../../../models/veiculos/vehicles-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  addVehicleData(vehicleData: VehicleData) {
    return this.httpClient.post<VehicleData>(`${API_URL}vehicledata/`, vehicleData)
  }

  updateVehicleData(vehicleData: VehicleData) {
    return this.httpClient.put<VehicleData>(`${API_URL}vehicledata/${vehicleData.id}`, vehicleData)
  }

  deleteVehicleData(id: number ) {
    return this.httpClient.delete<VehicleData>(`${API_URL}vehicledata/${id}`)
  }
}
