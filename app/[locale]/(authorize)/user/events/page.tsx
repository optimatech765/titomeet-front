"use client"
import { DateSelectComponent } from '@/components/date.select.component';
import { PastEventJoined } from '@/components/past.event.joined';
import { PubCardComponent } from '@/components/pub.card.component';
import { EventsTabsComponent } from '@/sections/events.tabs.section';
import { Divider } from '@heroui/react';
import React from 'react';

const Page = () => {
    return (
        <div className='space-y-9 mt-7'>
            <section className='flex '>
                <h3 className='font-extrabold text-2xl'>Evènements</h3>
                <div className='flex items-center flex-1 justify-center justify-items-center space-x-3'>

                    <div>
                        <EventsTabsComponent />
                    </div>
                </div>

            </section>
            <section className='lg:grid grid-cols-1 gap-20 md:grid-cols-12'>

                <div className='lg:col-span-8 space-y-3'>

                    <div className=''>
                        <h5 className='font-semibold text-xl'>Aujourd’hui</h5>
                        <Divider className='mt-1.5 mb-2' />

                        <div className='space-y-3.5'>
                            <PastEventJoined />

                            <PastEventJoined />

                            <PastEventJoined />

                            <PastEventJoined />
                        </div>
                    </div>


                    <div className=''>
                        <h5 className='font-semibold text-xl'>Vendredi 18 Avril 2025</h5>
                        <Divider className='mt-1.5 mb-2' />

                        <div className='space-y-3.5'>
                            <PastEventJoined />

                            <PastEventJoined />

                            <PastEventJoined />

                            <PastEventJoined />
                        </div>
                    </div>



                    <div className=''>
                        <h5 className='font-semibold text-xl'>Aujourd’hui</h5>
                        <Divider className='mt-1.5 mb-2' />

                        <div className='space-y-3.5'>
                            <PastEventJoined />

                            <PastEventJoined />

                            <PastEventJoined />

                            <PastEventJoined />
                        </div>
                    </div>



                </div>
                <div className='lg:col-span-4 space-y-3'>
                    <DateSelectComponent />

                    <PubCardComponent />
                </div>

            </section>
        </div>
    );
}

export default Page;
