import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useAppContext } from '@/context';
import { LoadingComponent2 } from './loading.component';
import { EventDtoResponse } from '@/utils/dto/events.dto';
import { useOurEventsStore } from '@/stores/our.events.store';
import OurHorizontalCardComponent from './events/our.horizontal.card.component';
import { useScopedI18n } from '@/locales/client';

export const MyEventEventCardComponent = ({ showButton = true }: { showButton?: boolean }) => {
    const { isAuth } = useAppContext();
    const navbarT = useScopedI18n('navbar');
    const eventT = useScopedI18n('event');

    const { fetchEventList, dataList, isLoading: eventLoading } = useOurEventsStore();

    useEffect(() => {

        fetchEventList({ page: 1, limit: 2, createdById: isAuth?.id });
    }, []);

    return (
        <Card>
            <CardHeader className='flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <h3 className="text-lg font-bold text-primary">
                        {navbarT("ourevent")}
                    </h3>
                    {showButton &&
                        <p className="text-xs font-light">
                            {eventT("myEvent")}
                        </p>
                    }
                </div>

                <div>
                    {showButton &&
                        <Button name="Create" size={"sm"} as={Link} href={"/user/events/new"} startContent={<Plus className="w-4 h-4 text-white" />} radius='full' color='primary' className="mt-2 border-1 text-xs font-light text-white">
                            {eventT("create")}
                        </Button>
                    }
                    <div className='text-center'>
                        <Link href={"#"} className="text-xs font-medium text-primary">
                            {eventT("showAll")}
                        </Link>
                    </div>

                </div>

            </CardHeader>
            <CardBody className='space-y-2'>
                {eventLoading ? <>
                    <LoadingComponent2 />
                </> : <>
                    {dataList?.length === 0 ? <>
                        <div className="text-center">
                            {eventT("empty")}
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

