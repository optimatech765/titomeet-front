import { DateSelectComponent } from '@/components/date.select.component';
import { PubCardComponent } from '@/components/pub.card.component';
import { useEventsStore } from '@/stores/events.store';
import { EventDtoResponse } from '@/utils/dto/events.dto';
import { Divider } from '@heroui/react';
import React, { useEffect } from 'react';
import { LoadingComponent2 } from '../loading.component';
import { PartcipateEventCardHorizontalComponent } from '../events/partcipate.event.card.horizontal.component';

export const EventsTabs = () => {
    const { fetchEventList, dataList, isLoading: eventLoading } = useEventsStore();

    useEffect(() => {

        fetchEventList({ page: 1, limit: 25 });
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
                                <LoadingComponent2 />
                            </> : <>
                                {dataList?.length === 0 ? <>
                                    <div className="text-center">
                                        Il n&apos;y a pas de data
                                    </div>
                                </> :
                                    <>
                                        {dataList.map((event: EventDtoResponse, index: number) => (
                                            <PartcipateEventCardHorizontalComponent event={event} key={index} />
                                        ))}

                                    </>
                                }</>
                            }
                        </div>
                    </div>



                </div>
                <div className='md:col-span-4 space-y-3'>
                    <DateSelectComponent />

                    <PubCardComponent />
                </div>

            </section>
        </div>
    );
}

