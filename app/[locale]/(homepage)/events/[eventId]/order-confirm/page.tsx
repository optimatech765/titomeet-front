/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { Suspense} from 'react';
import { OrderConfirmPage } from './_order.confirm.page';

const Page = () => {


    return (
        <Suspense>
            <OrderConfirmPage />
        </Suspense>

    );
}

export default Page;


