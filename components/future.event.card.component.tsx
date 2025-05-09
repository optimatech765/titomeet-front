/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAppContext } from '@/context';
import { useAttendeeEventsStore } from '@/stores/attendee.event.store';
import { PartcipateEventCardHorizontalComponent } from './events/partcipate.event.card.horizontal.component';
import { EventDtoResponse } from '@/utils/dto/events.dto';

interface FutureEventCardComponentProps {
    title?: string;
    subtitle?: string;
    titleClass?: string;
    data?: any[];
}

export const FutureEventCardComponent: React.FC<FutureEventCardComponentProps> = ({ titleClass = "text-primary", title = " Évènement à venir", subtitle = "  Evènements auxquels vous êtes inscrits", data }) => {
    const { isAuth } = useAppContext();

    const { fetchEventList, dataList, isLoading: eventLoading } = useAttendeeEventsStore();

    useEffect(() => {

        fetchEventList({ page: 1, limit: 2, attendeeId: isAuth?.id });
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
                        Voir tout
                    </Link>
                </div>

            </div>
            {dataList.map((event: EventDtoResponse, index: number) => (
                <PartcipateEventCardHorizontalComponent event={event} key={index} />
            ))}
        </div>
    );
}

