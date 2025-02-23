"use client"
import React from 'react';
import { Card, CardBody } from '@heroui/react';
import Image from 'next/image';


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex  justify-center py-16 bg-gray-100">
            <Card className="flex w-fit md:w-[900px] overflow-hidden rounded-lg shadow-lg bg-white">

                <div className=" md:grid grid-cols-2 justify-center">
                    <div className=" md:block hidden">
                        <Image alt='dd' src={'/img/login-image.jpg'} width={400} height={400} className="w-full h-full object-cover" />

                    </div>
                    <div className={" px-4 mx-auto md:px-16"}>
                        {children}
                    </div>


                </div>
            </Card>
        </div>
    );
}


export default Layout;

