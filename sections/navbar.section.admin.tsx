/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Navbar, NavbarContent } from '@heroui/react';
import { Bell, Menu, Search } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';


export const NavbarSectionAdmin = ({ isOpen, setIsOpen, setOpenSideBar, openSideBar }: {
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>,
    isOpen: boolean,
    openSideBar: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const params = useParams();
    const { spaceName } = params;

    return (
        <Navbar className=" px-0 bg-white border-b-1 " maxWidth={"full"}  >
            <NavbarContent className="flex justify-between items-center w-full flex-1">

                <div className={"flex items-center gap-2 "}>
                    {/* Menu burger medium device */}
                    <Button onPress={() => setOpenSideBar(!openSideBar)} isIconOnly radius='full' className="hidden  md:flex text-white bg-primary" >
                        <Menu size={24} fill="#ee3540" />
                    </Button>
                    {/* Mobile device */}
                    <Button onPress={() => setIsOpen(true)} isIconOnly radius='full' className="md:hidden flex text-white bg-primary" >

                        <Menu size={24} fill="#ee3540" />
                    </Button>
                    <Input
                        startContent={<Search className={"text-primary"} />}
                        radius='full'
                        className=" rounded-full ring-1 ring-slate-300 border-slate-300 bg-white hidden md:block"
                        placeholder="Rechercher" />
                </div>
            </NavbarContent>
            <NavbarContent className="flex   items-center w-full">
                <div className="flex items-center space-x-2 justify-end flex-1">

                    <Link href="/user/notifications" className="font-semibold underline-hover text-black">
                        <Bell className="w-8 h-8 text-primary" fill={"#ee3540"} />
                    </Link>
                    <div>
                        <Dropdown>
                            <DropdownTrigger>
                                <Avatar className="w-10 h-10 rounded-full cursor-pointer text-white" />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new">Mon compte</DropdownItem>
                                <DropdownItem key="copy">Se déconnecter</DropdownItem>
                                <DropdownItem key="edit">Changer de compte</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </NavbarContent>
        </Navbar>
    );
}

