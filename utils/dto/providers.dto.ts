/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProviderDto {
    id?: string
    name: string
    description: string
    image: string
    addressId: string
    categoryId: string
    userId: string
    category: any;
    address: any;
}