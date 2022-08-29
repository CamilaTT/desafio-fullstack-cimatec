export interface VehiclesData extends Array<VehicleData>{}

export interface VehicleData {
  id?: number 
  vin: string
  odometer: number | string
  tirePressure: string
  status: string
  batteryStatus: string
  fuelLevel: number | string
  lat: number | string
  _long: number | string
}

export interface VehiclesDataAPI{
  vehicleData: VehiclesData
}
