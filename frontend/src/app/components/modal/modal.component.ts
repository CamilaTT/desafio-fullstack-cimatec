import { VehicleData } from '../../models/vehicles/vehicles-data';
import { CrudService } from '../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  vehicleDataForm!: FormGroup;

  vehicleData: VehicleData = {
    vin: '',
    odometer: '',
    tirePressure: '',
    fuelLevel: '',
    status: '',
    batteryStatus: '',
    lat: '',
    _long: ''
  }


  constructor(private crudService: CrudService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.vehicleDataForm = this.formBuilder.group({
      id: [this.vehicleData.id],
      vin: [this.vehicleData.vin, Validators.required],
      odometer: [this.vehicleData.odometer, Validators.required],
      tirePressure: [this.vehicleData.tirePressure, Validators.required],
      fuelLevel: [this.vehicleData.fuelLevel, Validators.required],
      status: [this.vehicleData.status, Validators.required],
      batteryStatus: [this.vehicleData.batteryStatus, Validators.required],
      lat: [this.vehicleData.lat, Validators.required],
      _long: [this.vehicleData._long, Validators.required]
    })
  }

  addVehicleData() {

   if(this.vehicleDataForm.valid) {
      const newVehicleData = this.vehicleDataForm.getRawValue() as VehicleData;
      this.crudService.addVehicleData(newVehicleData).subscribe((res) => {
        this.vehicleDataForm.reset()
        Swal.fire(
          {
            title: 'Dados cadastrados com sucesso!',
            icon: 'success',
            confirmButtonColor: '#00274E'
          }
        )
      },
        (error) => {
            Swal.fire(
              {
                text: 'Não foi possível realizar o cadastro.',
                confirmButtonColor: '#00274E'
              }
            )
        }
      )
    }
  }

  updateVehicleData() {

    const vehicleData = this.vehicleDataForm.getRawValue() as VehicleData;
    console.log(vehicleData)
    this.crudService.updateVehicleData(vehicleData).subscribe(res => {
      Swal.fire(
        {
          title: 'Dados atualizados com sucesso!',
          icon: 'success',
          confirmButtonColor: '#00274E'
        }
      )
    },
      (error) => {
          Swal.fire(
            {
              text: 'Não foi possível atualizar os dados.',
              confirmButtonColor: '#00274E'
            }
          )
      }
    )
  }
}

