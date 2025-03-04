import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import React from 'react';
import { HorizontalEventCardComponent2 } from './horizontal.event.card.component';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export const MyEventEventCardComponent = () => {
    return (
        <Card>
            <CardHeader className='flex justify-between items-center'>
                <div>
                    <h3 className="text-lg font-bold text-primary">
                        Mes évènements
                    </h3>
                    <p className="text-xs font-light">
                        Evènements organisés
                    </p>
                </div>
                <Button startContent={<Plus className="w-4 h-4 text-white" />} size='sm' radius='full' color='primary' className="mt-2 border-1 text-xs font-light text-white">
                    Créer un évènement
                </Button>
                <div>
                    <Link href={"#"} className="text-xs font-medium text-primary">
                        Voir tout
                    </Link>
                </div>

            </CardHeader>
            <CardBody className='space-y-2'>
                <HorizontalEventCardComponent2 />
                <HorizontalEventCardComponent2 />

            </CardBody>
        </Card>
    );
}

