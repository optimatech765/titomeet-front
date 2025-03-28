"use client"
import { Card, CardBody } from '@heroui/react';
import React from 'react';
import { EventsList } from './_events.list';
import { ModificationList } from './_modification.list';

export const PageContent = () => {
    return (
        <div className='space-y-3'>
            <EventStats />
            <EventsList />
            <ModificationList />
        </div>
    );
}


const stats = [
    { title: "Événements créés", value: "2152" },
    { title: "Événements en attente", value: "120" },
    { title: "Événements validés", value: "200" },
    { title: "Demandes de modifications", value: "200" },
];

const EventStats = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {stats.map((stat, index) => (
                <Card key={index} className="border-1">
                    <CardBody>
                        <p className="text-gray-500 text-center">{stat.title}</p>
                        <p className="text-2xl font-bold text-center">{stat.value}</p>
                    </CardBody>
                </Card>
            ))}
        </section>
    );
};

