/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { DateSelectComponent } from '@/components/date.select.component';
import { PastEndEventCard } from '@/components/past.end.event.card';
import { PastEventJoined } from '@/components/past.event.joined';
import { PubCardComponent } from '@/components/pub.card.component';
import { EventsSection } from '@/sections/events.section';
import { EventsTabsComponent } from '@/sections/events.tabs.section';
import { FilterSection2 } from '@/sections/filter.section';
import { DateInput, Divider, } from '@heroui/react';
import { CalendarIcon } from 'lucide-react';
import React, { useState } from 'react';
import { CalendarDate, parseDate } from "@internationalized/date";

const Page = () => {
    const [activeTab, setActiveTab] = useState("events");



    return (
        <div className='space-y-9 my-7 section-container'>
            <section className='sm:flex '>
                <h3 className='font-extrabold text-2xl'>Evènements</h3>
                <div className='flex items-center flex-1 justify-center justify-items-center space-x-3'>

                    <div>
                        <EventsTabsComponent activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                </div>

            </section>


            {activeTab === "events" &&
                <>
                    <Divider className='mt-5 mb-2' />
                    <section className='lg:grid grid-cols-1 gap-20 md:grid-cols-12'>

                        <div className='md:col-span-8 space-y-3'>

                            <div className=''>
                                <h5 className='font-semibold text-xl'>Aujourd’hui</h5>
                                <Divider className='mt-1.5 mb-2' />

                                <div className='space-y-3.5 sm:block'>
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
                        <div className='md:col-span-4 space-y-3'>
                            <DateSelectComponent />

                            <PubCardComponent />
                        </div>

                    </section>
                </>

            }

            {/* Découvrir */}
            {activeTab === "showmore" &&
                <>
                    <FilterSection2 />
                    <Divider className='mt-5 mb-2' />
                    <section>
                        <EventsSection />
                    </section>
                </>

            }

            {/* Favoris */}
            {activeTab === "favoris" &&
                <>
                    <Divider className='mt-5 mb-2' />
                    <section>
                        <EventsSection />
                    </section>
                </>
            }

            {/* Historiques */}
            {activeTab === "history" &&
                <>
                    <Divider className='mt-5 mb-2' />
                    <section className='lg:grid grid-cols-1 gap-20 md:grid-cols-12'>

                        <div className='md:col-span-8 space-y-3'>

                            <div className=''>
                                <h5 className='font-semibold text-xl'>Aujourd’hui</h5>
                                <Divider className='mt-1.5 mb-2' />

                                <div className='space-y-3.5 sm:block'>
                                    <PastEndEventCard />

                                    <PastEndEventCard />

                                    <PastEndEventCard />
                                </div>
                            </div>


                            <div className=''>
                                <h5 className='font-semibold text-xl'>Vendredi 18 Avril 2025</h5>
                                <Divider className='mt-1.5 mb-2' />

                                <div className='space-y-3.5'>
                                    <PastEndEventCard />
                                </div>
                            </div>



                            <div className=''>
                                <h5 className='font-semibold text-xl'>Aujourd’hui</h5>
                                <Divider className='mt-1.5 mb-2' />

                                <div className='space-y-3.5'>
                                    <PastEndEventCard />


                                </div>
                            </div>

                        </div>
                        <div className='md:col-span-4 space-y-3'>
                            <div className='flex items-center gap-2  justify-between'>
                                <DateInput
                                    size='md'
                                    radius='full'
                                    defaultValue={parseDate("2024-04-04")}
                                    labelPlacement="outside"
                                    placeholderValue={new CalendarDate(1995, 11, 6) as any}
                                    startContent={
                                        <CalendarIcon className="text-2xl cursor-pointer text-primary pointer-events-none flex-shrink-0" />
                                    }
                                />

                                <DateInput
                                    size='md'
                                    radius='full'
                                    defaultValue={parseDate("2024-04-04")}
                                    labelPlacement="outside"
                                    placeholderValue={new CalendarDate(1995, 11, 6) as any}
                                    startContent={
                                        <CalendarIcon className="text-2xl cursor-pointer text-primary pointer-events-none flex-shrink-0" />
                                    }
                                />

                            </div>
                            <PubCardComponent />
                        </div>

                    </section>
                </>

            }
        </div>
    );
}

export default Page;
