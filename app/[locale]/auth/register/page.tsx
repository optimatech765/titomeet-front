
import React from 'react';
import { RegisterPage } from './_register.page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "TitoMee - Inscription",
    description: '...',
}

const Page = () => {
    return (
        <>
            <RegisterPage />
        </>
    );
}

export default Page;
