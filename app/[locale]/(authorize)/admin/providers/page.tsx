"use client"
import React from 'react';
import { ProvidersState } from './_providers.state';

const Page = () => {
    return (
        <div>
            <h1 className="text-2xl font-extrabold text-gray-900">
                Prestataires
            </h1>
            <section>
                <ProvidersState />
            </section>

        </div>
    );
}

export default Page;
