/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { ProvidersState } from './_providers.state';
import { Tab, Tabs } from '@heroui/react';
import { ActivePrividersPage } from './_active.provider.page';
import { PendingPrividersPage } from './_pending.prividers.page';

const Page = () => {

    return (
        <div>
            <h1 className="text-2xl font-extrabold text-gray-900">
                Prestataires
            </h1>
            <section>
                <ProvidersState />
            </section>

            <section>
                <div className="flex w-full flex-col">
                    <Tabs aria-label="Options"
                        className='bg-sec'
                        classNames={{
                            cursor: "bg-secondary-blue text-primary",
                        }}
                    >
                        <Tab key="music" title="Prestataires">
                            <ActivePrividersPage />
                        </Tab>
                        <Tab key="photos" title="Demandes">
                            <PendingPrividersPage />
                        </Tab>
                    </Tabs>
                </div>

            </section>

        </div>
    );
}

export default Page;
