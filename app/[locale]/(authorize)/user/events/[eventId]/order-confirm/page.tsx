/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { Suspense} from 'react';
import { OrderConfirmComponent } from '@/components/events/order.confirm.component';

const Page = () => {


    return (
        <Suspense>
            <OrderConfirmComponent />
        </Suspense>

    );
}

export default Page;


