/* eslint-disable @typescript-eslint/no-explicit-any */
import {DateRangePicker, Divider } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import { PubCardComponent } from '@/components/pub.card.component';
import { useEventsStore } from '@/stores/events.store';
import { EventDtoResponse } from '@/utils/dto/events.dto';
import { AwaitDataLoader } from '../await.data.loader';
import { useAppContext } from '@/context';
import { EmptyDateComponent } from '../empty.date.component';
import { PastAttendedEventComponent } from '../event-cards/past.attended.event.component';
import {parseDate} from "@internationalized/date";

const HistoryTabs = () => {

    const { isAuth } = useAppContext();
    const { fetchEventList, dataList, isLoading: eventLoading } = useEventsStore();
    const [selectedDate, setSelectedDate] = useState({ startDate: new Date().toISOString().split("T")[0], endDate: new Date().toISOString().split("T")[0] });

    
     const onDateChange = React.useCallback((startDate: any, endDate: any) => {
        const value = { startDate: startDate.toString(), endDate: endDate.toString() }
        setSelectedDate(value)
        fetchEventList({ startDate: value.startDate, endDate: value.endDate,status: "FINISHED", attendeeId: isAuth?.id, });
    }, [selectedDate]);

    useEffect(() => {

        fetchEventList({ page: 1, limit: 25, status: "FINISHED", attendeeId: isAuth?.id, });
    }, []);


    return (
        <div>
            <Divider className='mt-5 mb-2' />
            <section className=' flex flex-col-reverse lg:grid grid-cols-1 gap-20 md:grid-cols-12'>

                <div className='md:col-span-8 space-y-3'>

                    <div className=''>
                       
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
                        
                        <DateRangePicker

                                    classNames={{
                                        selectorIcon: "text-primary",
                                        inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                                    }}
                                    selectorButtonPlacement={"start"}
                                    size='md' className="max-w-xs"
                                    aria-label='Intervalle de date'
                                    value={{
                                        start: parseDate(selectedDate.startDate),
                                        end: parseDate(selectedDate.endDate)
                                    } as any}
                                    onChange={(value: any) => {

                                        onDateChange(value?.start, value?.end)
                                    }
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
