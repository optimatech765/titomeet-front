"use client";
import React, { useEffect } from 'react';
import { UserState } from './_user.state';
import { AdminTableComponent } from '@/components/tables/admin.table.component';
import { Avatar, Card, CardBody } from '@heroui/react';
import { MapPinIcon } from 'lucide-react';
import { useUserStore } from '@/stores/admin/admin.users.store';
import { useParams } from 'next/navigation';
import { LoadingComponent } from '@/components/loading.component';


const Page = () => {

    const params = useParams();
    const { userId } = params;
    const { isLoading, fetchSingleItem } = useUserStore()

    useEffect(() => {
        fetchSingleItem(userId as string);
    }, [userId]);

    
    return (
        <div className="sm:flex  gap-3 sm:overflow-y-hidden h-screen">
            {isLoading ?<LoadingComponent /> :
            <>
            <div className={"sm:w-1/4"}>
                <Card className='border-1 border-slate-300'>
                    <CardBody>
                        <div className='flex items-center justify-center'>
                            <Avatar radius='full'
                                src="/img/user.png"
                                alt="hero"
                                size='lg'
                                className='h-28 w-28'
                            />
                        </div>
                        <div className='mt-2 space-y-3'>
                            <p className={"text-center font-light text-sm "}>#34345534</p>
                            <div>
                                <p className={"text-center font-bold text-xl"}>User Name</p>
                                <p className={"text-center font-light text-sm "}>benin@gmail.com</p>
                                <div className="flex items-center gap-2 text-gray-600 mt-2 text-center justify-center font-light text-sm">
                                    <MapPinIcon fill="red" className="w-4 h-4 text-white" /> <span>Localisation</span>
                                </div>
                            </div>

                        </div>
                    </CardBody>
                </Card>
            </div>


            <div className='space-y-3 sm:h-screen overflow-auto navscroll w-full'>

                <section>
                    <UserState />
                </section>

                <section>
                    <AdminTableComponent
                        title={"Historique des évènements"}
                        columns={columns}
                        valuesList={valuesList}
                        emptyContent={<p className="text-center text-gray-500">Aucun utilisateur trouvé</p>}
                    />
                </section>

                <section>
                   
                    <AdminTableComponent
                        title={"Historique des transactions"}
                        columns={columns}
                        valuesList={valuesList}
                        emptyContent={<p className="text-center text-gray-500">Aucun utilisateur trouvé</p>}
                    />
                     <div className="min-h-20 mt-20"></div>
                </section>
               
                

            </div>
            </>}

        </div>
    );
}

export default Page;

const columns = [
    { name: "Date", uid: "date", sortable: true },
    { name: "Nom", uid: "name", sortable: true },
    { name: "Prénom", uid: "firstname", sortable: true },
    { name: "Email", uid: "email", sortable: true },
    { name: "Téléphone", uid: "phone", sortable: true },
    { name: "Role", uid: "role", sortable: true },
    { name: "Actions", uid: "actions", sortable: false },
];

const valuesList = [
    {
        id: "1",
        date: "2022-01-01",
        name: "John Doe",
        firstname: "John",
        email: "john@gmail.com",
        phone: "0600000000",
        role: "Admin",

    },
    {
        id: "2",
        date: "2022-01-02",
        name: "John Doe",
        firstname: "John",
        email: "john@gmail.com",
        phone: "0600000000",
        role: "Admin",

    },
    {
        id: "3",
        date: "2022-01-03",
        name: "John Doe",
        firstname: "John",
        email: "john@gmail.com",
        phone: "0600000000",
        role: "Admin",

    },
    {
        id: "4",
        date: "2022-01-04",
        name: "John Doe",
        firstname: "John",
        email: "john@gmail.com",
        phone: "0600000000",
        role: "Admin",

    },
    {
        id: "5",
        date: "2022-01-05",
        name: "John Doe",
        firstname: "John",
        email: "john@gmail.com",
        phone: "0600000000",
        role: "Admin",

    },
    {
        id: "6",
        date: "2022-01-06",
        name: "John Doe",
        firstname: "John",
        email: "john@gmail.com",
        phone: "0600000000",
        role: "Admin",

    },
    {
        id: "7",
        date: "2022-01-07",
        name: "John Doe",
        firstname: "John",
        email: "john@gmail.com",
        phone: "0600000000",
        role: "Admin",

    },
]
