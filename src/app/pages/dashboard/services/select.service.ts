import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from 'src/app/models/veiculos/vehicles';
import { API_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private httpClient: HttpClient) { }

  getSelectedVehicle(id: number):Observable<Veiculo> {
    return this.httpClient.get<Veiculo>(`${API_URL}vehicle/${id}`)
  }
}
