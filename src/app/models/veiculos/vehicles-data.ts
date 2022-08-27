export interface VehiclesData extends Array<VehicleData>{}

export interface VehicleData {
  vin: string
  odometer: number | string
  status: boolean | null
  fuelLevel: number | string
  lat: number | string
  _long: number | string

}

export interface VehiclesDataAPI{
  vehicleData: VehiclesData
}
