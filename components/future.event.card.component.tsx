/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAppContext } from '@/context';
import { useAttendeeEventsStore } from '@/stores/attendee.event.store';
import { EventDtoResponse } from '@/utils/dto/events.dto';
import { useScopedI18n } from '@/locales/client';
import { AttendedEventComponent } from './event-cards/attended.event.component';

interface FutureEventCardComponentProps {
    title?: string;
    subtitle?: string;
    titleClass?: string;
    data?: any[];
}

export const FutureEventCardComponent: React.FC<FutureEventCardComponentProps> = ({ titleClass = "text-primary", title = " Évènement à venir", subtitle = "  Evènements auxquels vous êtes inscrits", data }) => {
    const { isAuth } = useAppContext();
    const eventT = useScopedI18n('event');

    const { fetchEventList, dataList, isLoading: eventLoading } = useAttendeeEventsStore();

    useEffect(() => {

        fetchEventList({ page: 1, limit: 2, attendeeId: isAuth?.id,startDate:new Date().toISOString().split("T")[0] });
    }, []);

    return (
        <div className="overflow-auto space-y-3 border-1 border-gray-200 bg-white shadow-sm rounded-lg p-2">
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className={`text-lg font-bold  ${titleClass}`}>
                        {title}
                    </h3>
                    <p className="text-xs font-light">
                        {subtitle}
                    </p>
                </div>
                <div>
                    <Link href={"#"} className="text-xs font-medium text-primary">
                       {eventT("showAll")}
                    </Link>
                </div>

            </div>
            {dataList.map((event: EventDtoResponse, index: number) => (
                <AttendedEventComponent event={event} key={index} />
            ))}
        </div>
    );
}

