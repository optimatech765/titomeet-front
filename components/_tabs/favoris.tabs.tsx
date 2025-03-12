import { EventsSection } from '@/sections/events.section';
import { Divider } from '@heroui/react';
import React from 'react';

const FavorisTabs = () => {
    return (
        <div>
            <Divider className='mt-5 mb-2' />
            <section>
                <EventsSection />
            </section>
        </div>
    );
}

export default FavorisTabs;
