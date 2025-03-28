"use client"
import { AdminTableComponent } from '@/components/tables/admin.table.component';
import React from 'react';
import { UsersState } from './users.state';

const Page = () => {
    return (
        <div>
            <section>
                <UsersState />
            </section>
            
            <section>
                <AdminTableComponent
                    title={"Liste des utilisateurs"}
                    columns={columns}
                    valuesList={valuesList}
                    emptyContent={<p className="text-center text-gray-500">Aucun utilisateur trouvé</p>}
                />
            </section>
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
