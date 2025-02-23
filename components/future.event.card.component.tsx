import { Card, CardBody, CardHeader } from '@heroui/react';
import React from 'react';
import { HorizontalEventCardComponent } from './horizontal.event.card.component';
import Link from 'next/link';

export const FutureEventCardComponent = () => {
    return (
        <Card>
            <CardHeader className='flex justify-between items-center'>
                <div>
                    <h3 className="text-lg font-bold text-primary">
                        Évènement futur
                    </h3>
                    <p className="text-xs font-light">
                        Evènements auxquels vous êtes inscrits
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

