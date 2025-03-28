/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { menuItems } from '@/utils/constantes';
import { Button, Drawer, DrawerContent } from '@heroui/react';
import clsx from 'clsx';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const SidebarSection = ({ openSideBar, isOpen, setIsOpen }:
    {
        openSideBar: boolean,
        isOpen: boolean,
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    }) => {

    const [activeLink, setActiveLink] = useState("home");

    return (
        <div className="flex w-full bg-white px-6">

            <div className={' min-h-screen  rounded-lg w-full flex flex-col justify-between '} >
                <div className={clsx({ "mt-4": !openSideBar })}>
                    <Image alt='dd' src={openSideBar ? "/img/logo2.png" : "/img/logo.png"} width={openSideBar ? 300 : 500} height={openSideBar ? 300 : 500} />
                </div>

                <div className={"space-y-4 flex-1 flex flex-col justify-between pb-3"}>

                    <div className={"space-y-1.5"}>

                        {menuItems.map((item: any) => (
                            <>
                                <Link key={item.tague} onClick={() => setActiveLink(item?.tague)} href={item?.lien}
                                    className={clsx({
                                        "text-[#1E1E1E]": activeLink !== item?.tague,
                                        "bg-primary text-white": activeLink === item?.tague,
                                        "justify-center": !openSideBar
                                    },
                                        "px-2 py-1.5  rounded-xl gap-1 flex items-center h-[38px] font-medium my-2 "
                                    )}
                                >
                                    <item.icon className="w-6 h-6" />
                                    {openSideBar &&
                                        <span className=" font-medium ">
                                            {item?.libelle}
                                        </span>}
                                </Link>
                            </>
                        ))}

                    </div>

                    <div className='space-y-1 flex flex-col justify-between'>


                        {openSideBar ?
                            <Button isIconOnly={openSideBar} className={clsx({ "px-4 w-full": openSideBar, "px-1 w-fit rounded-full": !openSideBar },
                                " py-4 rounded-full bg-primary  text-white")}>
                                <LogOut className="w-4 h-4 text-white" />
                                Se déconnecter
                            </Button> :

                            <Button isIconOnly={true} className='bg-primary rounded-full flex items-center justify-center w-fit text-white'>
                                <LogOut className="w-4 h-4 text-white" />
                            </Button>


                        }
                    </div>

                </div>

            </div>


            {/* Affichage de drawer sur le mobile */}
            <Drawer
                className={"md:hidden"}
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                placement="left"
                classNames={{
                    closeButton: 'text-primary tex-xl font-semibold',
                }}
                >
                <DrawerContent className="w-64 p-4">
                    <nav className="flex flex-col h-full">
                        <div>
                            <Image alt='dd' src={"/img/logo2.png"} width={300} height={300} />
                        </div>
                        <div className={"space-y-1.5 flex-1"}>

                            {menuItems.map((item: any) => (
                                <>
                                    <Link key={item.libelle} onClick={() => setActiveLink(item?.tague)} href={item?.lien}
                                        className={clsx({
                                            "text-[#1E1E1E]": activeLink !== item?.tague,
                                            "bg-primary text-white": activeLink === item?.tague,

                                        },
                                            "px-2 py-1.5  rounded-xl gap-1 flex items-center h-[38px] font-medium text-xs my-2"
                                        )}
                                    >


                                        <item.icon className="w-6 h-6 " />

                                        <span className="">
                                            {item?.libelle}
                                        </span>
                                    </Link>

                                </>


                            ))}

                        </div>

                        <div className='space-y-1'>

                            <Button isIconOnly={openSideBar}
                                className={clsx({ "px-4 w-full": openSideBar, "px-1 w-fit rounded-full": !openSideBar },
                                    " py-4 rounded-full bg-primary   text-white")}>
                                <LogOut className="w-4 h-4 text-white" />
                                Se déconnecter
                            </Button>
                        </div>


                    </nav>
                </DrawerContent>
            </Drawer>
        </div>

    );
}
