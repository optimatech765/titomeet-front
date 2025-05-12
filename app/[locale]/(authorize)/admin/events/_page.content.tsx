"use client"
import { Card, CardBody } from '@heroui/react';
import React, { useEffect } from 'react';
import { EventsList } from './_events.list';
import { useAdminEventsStore } from '@/stores/admin/admin.events.store';
// import { ModificationList } from './_modification.list';

export const PageContent = () => {
    return (
        <div className='space-y-3'>
            <EventStats />
            <EventsList />
            {/* <ModificationList /> */}
        </div>
    );
}


const EventStats = () => {
    const { fetchEventState, eventState } = useAdminEventsStore()

    useEffect(() => {
        fetchEventState()
    }, []);

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">


            <Card className="border-1">
                <CardBody>
                    <p className="text-gray-500 text-center">Total en attente</p>
                    <p className="text-2xl font-bold text-center">{eventState?.totalPendingEvents}</p>
                </CardBody>
            </Card>
            <Card className="border-1">
                <CardBody>
                    <p className="text-gray-500 text-center">Total publiés</p>
                    <p className="text-2xl font-bold text-center">{eventState?.totalPublishedEvents}</p>
                </CardBody>
            </Card>
            <Card className="border-1">
                <CardBody>
                    <p className="text-gray-500 text-center">Total Brouillons</p>
                    <p className="text-2xl font-bold text-center">{eventState?.totalDraftEvents}</p>
                </CardBody>
            </Card>
            <Card className="border-1">
                <CardBody>
                    <p className="text-gray-500 text-center">Total des rejets</p>
                    <p className="text-2xl font-bold text-center">{eventState?.totalRejectedEvents}</p>
                </CardBody>
            </Card>

        </section>
    );
};

