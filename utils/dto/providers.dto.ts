/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProviderDto {
    id?: string
    name: string
    description: string
    image: File
    addressId: string
    categoryId: string
    email: string
    phoneNumber: string
    website: string
    pricingDetails: string
    documents?:any
}

export interface ProvidersResponseDto {

    id: string
    name: string
    description: string
    image: string
    addressId: string
    categoryId: string
    userId: string
    category: {
        id: string
        name: string
        description: string
    }
    address: {
        id: string
        name: string
        line2: string
        city: string
        state: string
        country: string
        countryCode: string
        postalCode: string
        latitude: 0
        longitude: 0
        resultType: string
    }

}
