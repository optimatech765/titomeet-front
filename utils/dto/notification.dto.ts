/* eslint-disable @typescript-eslint/no-explicit-any */
export interface NotificationDto {
    id: string,
    notifiedToId: string,
    userId: string,
    type: string,
    read: true,
    data: any,
    createdAt: string,
    updatedAt: string
}