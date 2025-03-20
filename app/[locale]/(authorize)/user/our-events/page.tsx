"use client"
import { DateSelectComponent } from '@/components/date.select.component';
import { PubCardComponent } from '@/components/pub.card.component';
import { OurEventsTabsComponent } from '@/sections/events.tabs.section';
import { Button, Divider } from '@heroui/react';

import React, { useEffect, useState } from 'react';

import { PublishEventCardComponent } from '@/components/publish.event.card.component';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useEventsStore } from '@/stores/events.store';
import { EventDto } from '@/utils/dto/events.dto';

const Page = () => {
    const [activeTab, setActiveTab] = useState("publish");

    const { fetchEventList, dataList, isLoading: eventLoading } = useEventsStore();

    useEffect(() => {

        fetchEventList();
    }, [activeTab]);

    return (
        <div className='space-y-9 my-7 section-container'>
            <section className='sm:flex '>
                <h3 className='font-extrabold text-2xl'>Mes évènements</h3>
                <div className='flex items-center flex-1 justify-center justify-items-center space-x-3'>

                    <div>
                        <OurEventsTabsComponent activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                </div>
                <div>
                    <Button href={"/user/events/new"} as={Link} startContent={<Plus className="w-4 h-4 text-white" />} size='sm' radius='full' color='primary' className="mt-2 border-1 text-xs font-light text-white">
                        Créer un évènement
                    </Button>
                </div>

            </section>



            <section>

                <div className='flex flex-col md:flex-row flex-wrap  gap-10 lg:gap-20'>

                    {/* Evènements publiés */}
                    {activeTab === "publish" &&
                        <>

                            <div className='flex-1 space-y-3'>

                                <div className=''>
                                    <h5 className='font-semibold text-xl'>Aujourd’hui</h5>
                                    <Divider className='mt-1.5 mb-2' />

                                    <div className='space-y-3.5 sm:block'>
                                        {eventLoading ? <>
                                            <h4>Chargement...</h4>
                                        </> : <>
                                            {dataList?.length === 0 ? <>
                                                <div className="text-center">
                                                    Il n&apos;y a pas de data
                                                </div>
                                            </> :
                                                <>
                                                    {dataList.map((event: EventDto, index: number) => (
                                                        <PublishEventCardComponent status={"published"} key={index} />
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
                    {activeTab === "draft" &&
                        <>

                            <div className='flex-1 space-y-3'>

                                <div className=''>
                                    <h5 className='font-semibold text-xl'>Aujourd’hui</h5>
                                    <Divider className='mt-1.5 mb-2' />

                                    <div className='space-y-3.5 flex justify-around flex-wrap md:block'>
                                        {eventLoading ? <>
                                            <h4>Chargement...</h4>
                                        </> : <>
                                            {dataList?.length === 0 ? <>
                                                <div className="text-center">
                                                    Il n&apos;y a pas de data
                                                </div>
                                            </> :
                                                <>
                                                    {dataList.map((event: EventDto, index: number) => (
                                                        <PublishEventCardComponent key={index} />
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
                    {activeTab === "programming" &&
                        <>


                            <div className='flex-1 space-y-3'>

                                <div className=''>
                                    <h5 className='font-semibold text-xl'>Aujourd’hui</h5>
                                    <Divider className='mt-1.5 mb-2' />

                                    <div className='space-y-3.5 flex justify-around flex-wrap md:block'>

                                        {eventLoading ? <>
                                            <h4>Chargement...</h4>
                                        </> : <>
                                            {dataList?.length === 0 ? <>
                                                <div className="text-center">
                                                    Il n&apos;y a pas de data
                                                </div>
                                            </> :
                                                <>
                                                    {dataList.map((event: EventDto, index: number) => (
                                                        <PublishEventCardComponent status={"programming"} key={index} />
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
                    {activeTab === "past" &&
                        <>

                            <div className='flex-1 space-y-3'>

                                <div className=''>
                                    <h5 className='font-semibold text-xl'>Aujourd’hui</h5>
                                    <Divider className='mt-1.5 mb-2' />

                                    <div className='space-y-3.5 flex justify-around flex-wrap md:block'>
                                        {eventLoading ? <>
                                            <h4>Chargement...</h4>
                                        </> : <>
                                            {dataList?.length === 0 ? <>
                                                <div className="text-center">
                                                    Il n&apos;y a pas de data
                                                </div>
                                            </> :
                                                <>
                                                    {dataList.map((event: EventDto, index: number) => (
                                                        <PublishEventCardComponent status={"past"} key={index} />
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
