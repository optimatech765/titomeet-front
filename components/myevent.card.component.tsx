import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useAppContext } from '@/context';
import { LoadingComponent2 } from './loading.component';
import { EventDtoResponse } from '@/utils/dto/events.dto';
import { useOurEventsStore } from '@/stores/our.events.store';
import OurHorizontalCardComponent from './events/our.horizontal.card.component';

export const MyEventEventCardComponent = ({ showButton = true }: { showButton?: boolean }) => {
    const { isAuth } = useAppContext();

    const { fetchEventList, dataList, isLoading: eventLoading } = useOurEventsStore();

    useEffect(() => {

        fetchEventList({ page: 1, limit: 2, createdById: isAuth?.id });
    }, []);

    return (
        <Card>
            <CardHeader className='flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <h3 className="text-lg font-bold text-primary">
                        Mes évènements
                    </h3>
                    {showButton &&
                        <p className="text-xs font-light">
                            Evènements organisés
                        </p>
                    }
                </div>
                {showButton &&
                    <Button as={Link} href={"/user/events/new"} startContent={<Plus className="w-4 h-4 text-white" />} size='sm' radius='full' color='primary' className="mt-2 border-1 text-xs font-light text-white">
                        Créer un évènement
                    </Button>
                }
                <div>
                    <Link href={"#"} className="text-xs font-medium text-primary">
                        Voir tout
                    </Link>
                </div>

            </CardHeader>
            <CardBody className='space-y-2'>
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
                                <OurHorizontalCardComponent event={event} key={index} />
                            ))}

                        </>
                    }</>
                }

                {/* <HorizontalEventCardComponent />
                <HorizontalEventCardComponent /> */}

            </CardBody>
        </Card>
    );
}

