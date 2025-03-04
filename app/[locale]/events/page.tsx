"use client";
import { EventsSection } from '@/sections/events.section';
import { FilterSection } from '@/sections/filter.section';
import { Divider } from '@heroui/react';
import React from 'react';

const Page = () => {
    return (
        <div className='section-container '>

            <section>
                <FilterSection />
            </section>
            <Divider className='mt-1.5 mb-2' />
            <section>
                <EventsSection />
            </section>


        </div>
    );
}

export default Page;
