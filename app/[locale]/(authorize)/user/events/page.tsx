/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { EventsTabsComponent } from '@/sections/events.tabs.section';
import React, { useState } from 'react';
import { EventsTabs } from '@/components/_tabs/events.tabs';
import ShowmoreTabs from '@/components/_tabs/showmore.tabs';
import FavorisTabs from '@/components/_tabs/favoris.tabs';
import HistoryTabs from '@/components/_tabs/history.tabs';
import { useScopedI18n } from '@/locales/client';

const Page = () => {
    const [activeTab, setActiveTab] = useState("events");
    const navBarT = useScopedI18n("navbar");



    return (
        <div className='space-y-9 my-7 section-container'>
            <section className='sm:flex '>
                <h3 className='font-extrabold text-2xl'>{navBarT("event")}</h3>
                <div className='flex items-center flex-1 justify-center justify-items-center space-x-3'>

                    <div>
                        <EventsTabsComponent activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                </div>

            </section>


            {activeTab === "events" &&
                <>
                    <EventsTabs />
                </>

            }

            {/* Découvrir */}
            {activeTab === "showmore" &&
                <ShowmoreTabs />

            }

            {/* Favoris */}
            {activeTab === "favoris" &&
                <>
                    <FavorisTabs />
                </>
            }

            {/* Historiques */}
            {activeTab === "history" &&
                <>
                    <HistoryTabs />
                </>

            }
        </div>
    );
}

export default Page;
