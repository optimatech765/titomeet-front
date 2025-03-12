import { EventsSection } from '@/sections/events.section';
import { FilterSection2 } from '@/sections/filter.section';
import { Divider } from '@heroui/react';
import React from 'react';

const ShowmoreTabs = () => {
    return (
        <div>

            <FilterSection2 />
            <Divider className='mt-5 mb-2' />
            <section>
                <EventsSection />
            </section>

        </div>
    );
}

export default ShowmoreTabs;
