export interface FactoryType {
  type_id: number,
  description?: string,
  minInventory?: number,
  minInventoryFresh?: number,
  mandant?: number,
  segment?: number,
  productId: number,
  productName: string,
  productGeneration?: number,
  options?: string,
  optionIsSet?: boolean,
  comments?: string,
  contractVariant?: number,
  monthlyRateForDevice?: boolean
}