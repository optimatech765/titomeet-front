import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import React from 'react';
import { HorizontalEventCardComponent } from './horizontal.event.card.component';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export const MyEventEventCardComponent = () => {
    return (
        <Card>
            <CardHeader className='flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <h3 className="text-lg font-bold text-primary">
                        Mes évènements
                    </h3>
                    <p className="text-xs font-light">
                        Evènements organisés
                    </p>
                </div>
                <Button as={Link} href={"/user/events/new"} startContent={<Plus className="w-4 h-4 text-white" />} size='sm' radius='full' color='primary' className="mt-2 border-1 text-xs font-light text-white">
                    Créer un évènement
                </Button>
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

