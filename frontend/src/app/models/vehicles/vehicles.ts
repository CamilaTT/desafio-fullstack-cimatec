export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo {
  id: number | string
  vehicle: string
  totalSales: number | string
  connected: number | string
  softwareUpdates: number | string
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}
