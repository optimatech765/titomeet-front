/* eslint-disable @typescript-eslint/no-explicit-any */
import { PastEndEventCard } from '@/components/past.end.event.card';
import { DateInput, Divider } from '@heroui/react';
import { CalendarIcon } from 'lucide-react';
import React, { useEffect } from 'react';
import { PubCardComponent } from '@/components/pub.card.component';
import { CalendarDate, parseDate } from "@internationalized/date";
import { useEventsStore } from '@/stores/events.store';
import { EventDto } from '@/utils/dto/events.dto';

const HistoryTabs = () => {

    const { fetchEventList, dataList, isLoading: eventLoading } = useEventsStore();

    useEffect(() => {

        fetchEventList();
    }, []);


    return (
        <div>
            <Divider className='mt-5 mb-2' />
            <section className='lg:grid grid-cols-1 gap-20 md:grid-cols-12'>

                <div className='md:col-span-8 space-y-3'>

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
                                            <PastEndEventCard key={index} />
                                        ))}

                                    </>
                                }</>
                            }

                        </div>
                    </div>


                    <div className=''>
                        <h5 className='font-semibold text-xl'>Vendredi 18 Avril 2025</h5>
                        <Divider className='mt-1.5 mb-2' />

                        <div className='space-y-3.5'>
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
                                            <PastEndEventCard key={index} />
                                        ))}

                                    </>
                                }</>
                            }

                        </div>
                    </div>



                    <div className=''>
                        <h5 className='font-semibold text-xl'>Aujourd’hui</h5>
                        <Divider className='mt-1.5 mb-2' />

                        <div className='space-y-3.5'>
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
                                            <PastEndEventCard key={index} />
                                        ))}

                                    </>
                                }</>
                            }


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
        </div>
    );
}

export default HistoryTabs;
