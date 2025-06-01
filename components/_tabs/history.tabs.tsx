/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateInput, Divider } from '@heroui/react';
import { CalendarIcon } from 'lucide-react';
import React, { useEffect } from 'react';
import { PubCardComponent } from '@/components/pub.card.component';
import { CalendarDate, parseDate } from "@internationalized/date";
import { useEventsStore } from '@/stores/events.store';
import { EventDtoResponse } from '@/utils/dto/events.dto';
import { AwaitDataLoader } from '../await.data.loader';
import { useAppContext } from '@/context';
import { EmptyDateComponent } from '../empty.date.component';
import { PastAttendedEventComponent } from '../event-cards/past.attended.event.component';

const HistoryTabs = () => {

    const { isAuth } = useAppContext();
    const { fetchEventList, dataList, isLoading: eventLoading } = useEventsStore();

    useEffect(() => {

        fetchEventList({ page: 1, limit: 25, status: "FINISHED", attendeeId: isAuth?.id, });
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

                            <AwaitDataLoader emptyMessage={<EmptyDateComponent />} dataLength={dataList.length} isLoading={eventLoading}>
                                <>
                                    {dataList.map((event: EventDtoResponse, index: number) => (
                                        <PastAttendedEventComponent event={event} key={index} />
                                    ))}
                                </>
                            </AwaitDataLoader>
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
