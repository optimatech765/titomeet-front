
"use client"
import { DateSelectComponent } from '@/components/date.select.component';
import { FutureEventCardComponent } from '@/components/future.event.card.component';
import { MyEventEventCardComponent } from '@/components/myevent.card.component';
import { EventsSection } from '@/sections/events.section';
import { FilterSection } from '@/sections/filter.section';
import { Divider } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className={"py-6 text-foreground p-10 space-y-3 section-container"}>

            <h1 className="text-2xl font-extrabold md:flex gap-1 items-center">
                Bienvenue, Nom d’utilisateur
                <Image
                    src="/img/face.png"
                    alt="logo"
                    width={30}
                    height={30}

                />
            </h1>
            <p className={"text-lg font-light  "}>
                Découvrez les évènements autour de vous
            </p>

            <section className='lg:grid grid-cols-1 gap-4 md:grid-cols-12'>

                <div className='lg:col-span-8 space-y-3'>
                    <div>
                        <FilterSection />
                    </div>

                    <Divider />

                    <div>
                        <EventsSection withSearch={true} />
                    </div>
                </div>

                <div className='lg:col-span-4 space-y-3  '>
                    <DateSelectComponent />
                    <FutureEventCardComponent />

                    <MyEventEventCardComponent />
                </div>
            </section>
        </div>
    );
}

export default Page;