"use client"
import { DateSelectComponent } from '@/components/date.select.component';
import { PubCardComponent } from '@/components/pub.card.component';
import { OurEventsTabsComponent } from '@/sections/events.tabs.section';
import { Button, Divider } from '@heroui/react';

import React, { useEffect, useState } from 'react';

import { PublishEventCardComponent } from '@/components/publish.event.card.component';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { EventDtoResponse } from '@/utils/dto/events.dto';
import { LoadingComponent2 } from '@/components/loading.component';
import { useAppContext } from '@/context';
import { EventCardHorizontalComponent } from '@/components/event.card.horizontal.component';
import { useOurEventsStore } from '@/stores/our.events.store';
import { useScopedI18n } from '@/locales/client';
import { EmptyDateComponent } from '@/components/empty.date.component';

const Page = () => {
    const [activeTab, setActiveTab] = useState("PUBLISHED");
    const { isAuth } = useAppContext();
    const navbarT = useScopedI18n("navbar");
    const eventT = useScopedI18n("event");

    const { fetchEventList, dataList, isLoading: eventLoading, resetData } = useOurEventsStore();

    useEffect(() => {
        resetData()
        fetchEventList({ page: 1, limit: 25, createdById: isAuth?.id, status: activeTab });
    }, [activeTab]);

    useEffect(() => {
        resetData()
        fetchEventList({ page: 1, limit: 25, createdById: isAuth?.id, status: activeTab });
    }, []);

    return (
        <div className='space-y-9 my-7 section-container'>
            <section className='sm:flex '>
                <h3 className='font-extrabold text-2xl'>{navbarT("ourevent")}</h3>
                <div className='flex items-center flex-1 justify-center justify-items-center space-x-3'>

                    <div>
                        <OurEventsTabsComponent activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                </div>
                <div>
                    <Button href={"/user/events/new"} as={Link} startContent={<Plus className="w-4 h-4 text-white" />} size='sm' radius='full' color='primary' className="mt-2 border-1 text-xs font-light text-white">
                       {eventT("create")}
                    </Button>
                </div>

            </section>



            <section>

                <div className='flex flex-col md:flex-row flex-wrap  gap-10 lg:gap-20'>

                    {/* Evènements publiés */}
                    {activeTab === "PUBLISHED" &&
                        <>

                            <div className='flex-1 space-y-3'>

                                <div className=''>
                                   
                                    <Divider className='mt-1.5 mb-2' />

                                    <div className='space-y-3.5 sm:block'>
                                        {eventLoading ? <>
                                            <LoadingComponent2 />
                                        </> : <>
                                            {dataList?.length === 0 ? <>
                                                <div className="text-center h-full flex justify-center items-center">
                                                    <h3><EmptyDateComponent /></h3>
                                                </div>
                                            </> :
                                                <>
                                                    {dataList.map((event: EventDtoResponse, index: number) => (
                                                        // <PublishEventCardComponent event={event} status={"published"} key={index} />
                                                        <EventCardHorizontalComponent event={event} status={"PUBLISHED"} key={index} />
                                                    ))}

                                                </>
                                            }</>
                                        }
                                    </div>
                                </div>

                            </div>

                        </>
                    }

                    {/* Evènements brouillons */}
                    {activeTab === "DRAFT" &&
                        <>

                            <div className='flex-1 space-y-3'>

                                <div className=''>
                                    <Divider className='mt-1.5 mb-2' />

                                    <div className='space-y-3.5 flex justify-around flex-wrap md:block'>
                                        {eventLoading ? <>
                                            <LoadingComponent2 />
                                        </> : <>
                                            {dataList?.length === 0 ? <>
                                                <div className="text-center">
                                                    <EmptyDateComponent />
                                                </div>
                                            </> :
                                                <>
                                                    {dataList.map((event: EventDtoResponse, index: number) => (
                                                        <EventCardHorizontalComponent event={event} status={"DRAFT"} key={index} />
                                                    ))}

                                                </>
                                            }</>
                                        }
                                    </div>
                                </div>

                            </div>

                        </>

                    }

                    {/* Evènements programmés */}
                    {activeTab === "PROGRAMMING" &&
                        <>


                            <div className='flex-1 space-y-3'>

                                <div className=''>
                                    <Divider className='mt-1.5 mb-2' />

                                    <div className='space-y-3.5 flex justify-around flex-wrap md:block'>

                                        {eventLoading ? <>
                                            <LoadingComponent2 />
                                        </> : <>
                                            {dataList?.length === 0 ? <>
                                                <div className="text-center">
                                                   <EmptyDateComponent />
                                                </div>
                                            </> :
                                                <>
                                                    {dataList.map((event: EventDtoResponse, index: number) => (
                                                        <PublishEventCardComponent event={event} status={"programming"} key={index} />
                                                    ))}

                                                </>
                                            }</>
                                        }
                                    </div>
                                </div>

                            </div>

                        </>
                    }

                    {/* Evènements passé */}
                    {activeTab === "FINISHED" &&
                        <>

                            <div className='flex-1 space-y-3'>

                                <div className=''>
                                    <Divider className='mt-1.5 mb-2' />

                                    <div className='space-y-3.5 flex justify-around flex-wrap md:block'>
                                        {eventLoading ? <>
                                            <LoadingComponent2 />
                                        </> : <>
                                            {dataList?.length === 0 ? <>
                                                <div className="text-center">
                                                   <EmptyDateComponent />
                                                </div>
                                            </> :
                                                <>
                                                    {dataList.map((event: EventDtoResponse, index: number) => (
                                                        // <PublishEventCardComponent event={event} status={"FINISHED"} key={index} />
                                                        <EventCardHorizontalComponent event={event} status={"FINISHED"} key={index} />
                                                    ))}

                                                </>
                                            }</>
                                        }
                                    </div>
                                </div>

                            </div>

                        </>

                    }

                    <div className=' max-w-xs flex flex-col gap-4'>
                        <DateSelectComponent />

                        <PubCardComponent />
                    </div>
                </div>

            </section>

        </div>
    );
}

export default Page;
