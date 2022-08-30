
import { VehicleData } from './../../models/veiculos/vehicles-data';
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

  vehicleData!: VehicleData; 

  constructor(
    private crudService: CrudService, private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.vehicleDataForm = this.formBuilder.group({
      id: [],
      vin: ['', Validators.required],
      odometer: ['', Validators.required],
      tirePressure: ['', Validators.required],
      fuelLevel: ['', Validators.required],
      status: ['', Validators.required],
      batteryStatus: ['', Validators.required],
      lat: ['', Validators.required],
      _long: ['', Validators.required]
    })
  }

  addVehicleData() {  

    event?.preventDefault()

    if(this.vehicleDataForm.valid) {
      const newVehicleData = this.vehicleDataForm.getRawValue() as VehicleData;
      console.log(newVehicleData);
      this.crudService.addVehicleData(newVehicleData).subscribe((res) => {
        console.log(res)
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
                text: 'Não foi possível realizar o cadastro. Tente novamente mais tarde!',
                confirmButtonColor: '#00274E'
              }
            )
        }
      )
    }
  }
