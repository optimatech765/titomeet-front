/* eslint-disable @typescript-eslint/no-explicit-any */
import { useScopedI18n } from '@/locales/client';
import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import { Dot, EllipsisIcon } from 'lucide-react';

import React from 'react';

const columns = [
    { name: "Date", uid: "date" },
    { name: "Evènement", uid: "event" },
    { name: "Methode de paiement", uid: "paiement" },
    { name: "Montant", uid: "amount" },
    { name: "Statut", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
];

const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
} as any;

export const PaiementProfile = () => {

      const updateProfilT = useScopedI18n("updateProfil");

    const renderCell = React.useCallback((user: any, columnKey: string) => {
        const cellValue = user[columnKey];

        switch (columnKey) {

            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip startContent={
                        <Dot size={20} className="text-primary text-xl h-8 w-8" color={"currentColor"} />
                    } className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button name={"Actions"} isIconOnly size="sm" variant="light">
                                    <EllipsisIcon className="text-default-300" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem key="view">View</DropdownItem>
                                <DropdownItem key="edit">Edit</DropdownItem>
                                <DropdownItem key="delete">Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    {updateProfilT("sideBarTitle5")}
                </h2>

                <h4 className='text-sm font-medium text-gray-700'>{updateProfilT("historie")}</h4>
                <Table

                    isVirtualized={true}
                    removeWrapper
                    aria-label="Example static collection table"
                    className='mt-2'
                    classNames={{
                        th: "text-sm font-medium text-gray-700 bg-secondary-blue",
                        tbody: " font-semibold",
                        wrapper: "overflow-y-auto max-h-[200px]",
                    }} >
                    <TableHeader className='' columns={columns}>
                        {(column) => (
                            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={Paiements}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey as string)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
}

const Paiements = [
    {
        id: 1,
        date: "2025-03-10",
        event: "Conférence Tech",
        paiement: "Carte Bancaire",
        amount: 150,
        status: "active"
    },
    {
        id: 2,
        date: "2025-03-11",
        event: "Atelier Blockchain",
        paiement: "PayPal",
        amount: 200,
        status: "paused"
    },
    {
        id: 3,
        date: "2025-03-12",
        event: "Séminaire IA",
        paiement: "Virement",
        amount: 300,
        status: "vacation"
    },
    {
        id: 4,
        date: "2025-03-13",
        event: "Hackathon",
        paiement: "Carte Bancaire",
        amount: 100,
        status: "active"
    },
    {
        id: 5,
        date: "2025-03-14",
        event: "Formation React",
        paiement: "PayPal",
        amount: 250,
        status: "paused"
    },
    {
        id: 6,
        date: "2025-03-15",
        event: "Meetup DevOps",
        paiement: "Carte Bancaire",
        amount: 50,
        status: "vacation"
    },
    {
        id: 7,
        date: "2025-03-16",
        event: "Webinar Sécurité",
        paiement: "Virement",
        amount: 75,
        status: "active"
    },
    {
        id: 8,
        date: "2025-03-17",
        event: "Masterclass UX",
        paiement: "PayPal",
        amount: 180,
        status: "paused"
    },
    {
        id: 9,
        date: "2025-03-18",
        event: "Coding Bootcamp",
        paiement: "Carte Bancaire",
        amount: 400,
        status: "vacation"
    },
    {
        id: 10,
        date: "2025-03-19",
        event: "Networking Event",
        paiement: "Virement",
        amount: 90,
        status: "active"
    }
];






