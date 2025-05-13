/* eslint-disable @typescript-eslint/no-explicit-any */

import { UserDto } from "./auth.dto";


export type Pass = {
    passType: string;
    price: string;
}

export interface EventDto {
    id?: string;
    categories: any;
    name: string;
    description: string;
    badge: any;
    coverPicture: any;
    addressId: string;
    capacity: number;
    tags?: string[];
    accessType: "FREE" | "PAID";
    prices?: Pass[];
    visibility: "PUBLIC" | "PRIVATE";
    startDate: any;
    endDate: any;
    startTime: any;
    endTime: any;
    isDraft: false;
    providers?: string[];
}

export interface EventDtoResponse {
    id?: string;
    categories: any;
    name: string;
    description: string;
    badge: any;
    coverPicture: any;
    addressId: string;
    capacity: number;
    tags?: string[];
    accessType: "FREE" | "PAID";
    prices?: Pass[];
    visibility: "PUBLIC" | "PRIVATE";
    startDate: any;
    endDate: any;
    startTime: any;
    endTime: any;
    isDraft: false;
    providers?: string[];
    address: addressDto;
    participants: any[];
    postedBy?: UserDto;
    createdAt: string;
    isFavorite?: boolean;
    orders: any[];
    _count?: {
        orders: number;
    };
    ticketsSold?: number;
}

export interface addressDto {
    id: string;
    name: string;
    city: string;
    state: string;
    country: string;
    countryCode: string;
    latitude: number;
    longitude: number;
    postalCode?: string;
    line2?: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface EventListDto {
    items: EventDto[];
    total: number;
    page: number;
    limit: number;
}

export enum EventStatus {
    DRAFT = 'DRAFT',
    PENDING = 'PENDING',
    PUBLISHED = 'PUBLISHED',
    CANCELLED = 'CANCELLED',
    FINISHED = 'FINISHED',
    FAVORITE = 'FAVORITE',
}