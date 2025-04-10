"use client"

import { SidebarSection } from '@/sections/sidebar.section';
import clsx from 'clsx';
import React, { useState } from 'react';
import { NavbarSectionAdmin } from './navbar.section.admin';

export const DashLayout = ({ children }: { children: React.ReactNode }) => {

    const [openSideBar, setOpenSideBar] = useState(true);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className=' w-full h-screen overflow-hidden flex bg-white navscroll'>
            <div className={clsx({ "max-w-[250px]": openSideBar, "max-w-[90px]": !openSideBar },
                "hidden min-h-screen md:block navscroll  overflow-y-auto h-screen border-e-1 ")} >
                <SidebarSection  {...{ isOpen, setIsOpen }} openSideBar={openSideBar} />
            </div>
            <div className="flex-1 relative  w-4/6 h-screen">
                <div className='h-screen'>
                    <NavbarSectionAdmin {...{ isOpen, setIsOpen }} setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
                    <section className="flex flex-col gap-2 p-3 max-h-screen overflow-auto navscroll   ">
                        {children}
                        <div className="min-h-20"></div>
                    </section>


                </div>

            </div>


        </div>


    );
}