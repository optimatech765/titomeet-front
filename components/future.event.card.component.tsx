/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { HorizontalEventCardComponent } from './horizontal.event.card.component';
import Link from 'next/link';

interface FutureEventCardComponentProps {
    title?: string;
    subtitle?: string;
    titleClass?: string;
    data?: any[];
}

export const FutureEventCardComponent: React.FC<FutureEventCardComponentProps> = ({titleClass="text-primary", title = " Évènement à venir", subtitle = "  Evènements auxquels vous êtes inscrits", data }) => {
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
            <div className='space-y-2'>
                <HorizontalEventCardComponent />
                <HorizontalEventCardComponent />

            </div>
        </div>
    );
}

