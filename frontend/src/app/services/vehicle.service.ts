import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculos, VeiculosAPI } from 'src/app/models/vehicles/vehicles';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  getVehicles() {
    return this.httpClient.get<VeiculosAPI>(`${API_URL}vehicle`)
  }

  getSelectedVehicle(id: number):Observable<Veiculos> {
    return this.httpClient.get<Veiculos>(`${API_URL}vehicle/${id}`)
  }
}
