/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react';
import { TableComponent } from '@/components/table.component';
import { TableCell, TableRow } from '@heroui/react';
import { useAdminProvidersStore } from '@/stores/admin/admin.providers.store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const PendingPrividersPage = () => {

    const { items, isLoading, fetchItems, columnsValue } = useAdminProvidersStore()
    const router = useRouter();

    useEffect(() => {
        fetchItems({status:"PENDING"});
    }, []);

    const goTo = (id: string) => {
        router.push(`/admin/providers/${id}`)
    }

    return (
        <div>
            <TableComponent
                objectHookName={useAdminProvidersStore}
                title="Liste des demandes prestataires"
                columns={columnsValue}
                valuesList={items}
                emptyContent={<p>Aucun résultat</p>}
                isLoading={isLoading}
            >
                {items.map((item: any) => (
                    <TableRow key={item.id} className="" as={Link} href={`/admin/providers/${item.id}`}>
                        <TableCell className={"cursor-pointer"} onClick={()=>goTo(item.id)} > {item?.name}  </TableCell>
                        <TableCell className={"cursor-pointer"} onClick={()=>goTo(item.id)} >{item.category.name}</TableCell>
                        <TableCell className={"cursor-pointer"} onClick={()=>goTo(item.id)} >{item?.address?.name}</TableCell>
                        <TableCell className={"cursor-pointer"} onClick={()=>goTo(item.id)} >{item?.website}</TableCell>
                        <TableCell >
                            <></>
                        </TableCell>

                    </TableRow>
                ))}

            </TableComponent>
        </div>
    );
}
