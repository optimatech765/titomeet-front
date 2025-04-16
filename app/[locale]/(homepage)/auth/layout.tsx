"use client"
import React from 'react';
import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex  justify-center py-16 bg-gray-100">
            <Card className="flex w-fit md:w-[900px] overflow-hidden rounded-lg shadow-lg bg-white">

                <div className=" md:grid grid-cols-2 justify-center">
                    <div className=" md:block hidden">
                        <Link href="/">
                            <Image alt='dd' src={'/img/login-image.jpg'} width={400} height={400} className="w-full h-full object-cover" />
                        </Link>
                    </div>
                    <div className={" px-4 md:px-16"}>
                        {children}
                    </div>

                </div>
            </Card>
        </div>
    );
}


export default Layout;

