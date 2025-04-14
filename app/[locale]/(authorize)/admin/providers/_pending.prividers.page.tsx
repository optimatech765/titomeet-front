/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react';
import { TableComponent } from '@/components/table.component';
import { TableCell, TableRow } from '@heroui/react';
import { useAdminProvidersStore } from '@/stores/admin/admin.providers.store';
import Link from 'next/link';

export const PendingPrividersPage = () => {

    const { items, isLoading, fetchItems, columnsValue } = useAdminProvidersStore()

    useEffect(() => {
        fetchItems();
    }, []);

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
                        <TableCell > {item?.name}  </TableCell>
                        <TableCell >{item.category.name}</TableCell>
                        <TableCell >{item?.address?.name}</TableCell>
                        <TableCell >{item?.website}</TableCell>
                        <TableCell >
                            <></>
                        </TableCell>

                    </TableRow>
                ))}

            </TableComponent>
        </div>
    );
}
