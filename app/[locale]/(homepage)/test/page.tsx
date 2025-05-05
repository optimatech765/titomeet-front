import { HorizontalCardComponent } from '@/components/events/horizontal.card.component';
import React from 'react';

const Page = () => {
    return (
        <div className="w-full sm:w-1/2 md:w-4/12 space-y-2">
            <HorizontalCardComponent />

            <HorizontalCardComponent />

            {/* <OurHorizontalCardComponent /> */}
        </div>
    );
}

export default Page;
