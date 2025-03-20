/* eslint-disable @typescript-eslint/no-explicit-any */


type Pass = {
    passType: string;
    price: string;
}

export interface EventDto {
    id?: string;
    categories: string[];
    name: string;
    description: string;
    badge: string;
    coverPicture: string;
    addressId: string;
    capacity: number;
    tags?: string[];
    accessType: "FREE" | "PAID";
    prices?: Pass[];
    visbility: "PUBLIC" | "PRIVATE";
    startDate: any;
    endDate: any;
    startTime: any;
    endTime: any;
}

export interface EventListDto {
    items: EventDto[];
    total: number;
    page: number;
    limit: number;
}




