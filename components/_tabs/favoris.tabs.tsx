import { FavoriteEventSection } from '@/sections/events-sections/nears-events/favorite.event.section';
import { Divider } from '@heroui/react';
import React from 'react';

const FavorisTabs = () => {
    return (
        <div>
            <Divider className='mt-5 mb-2' />
            <section>
                <FavoriteEventSection />
            </section>
        </div>
    );
}

export default FavorisTabs;
