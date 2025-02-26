import { Card, CardBody, CardHeader } from '@heroui/react';
import React from 'react';
import { HorizontalEventCardComponent } from './horizontal.event.card.component';
import Link from 'next/link';

interface FutureEventCardComponentProps {
    title?: string;
    subtitle?: string;
    titleClass?: string;
    data?: any[];
}

export const FutureEventCardComponent: React.FC<FutureEventCardComponentProps> = ({titleClass="text-primary", title = " Évènement futur", subtitle = "  Evènements auxquels vous êtes inscrits", data }) => {
    return (
        <Card>
            <CardHeader className='flex justify-between items-center'>
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

            </CardHeader>
            <CardBody className='space-y-2'>
                <HorizontalEventCardComponent />
                <HorizontalEventCardComponent />

            </CardBody>
        </Card>
    );
}

