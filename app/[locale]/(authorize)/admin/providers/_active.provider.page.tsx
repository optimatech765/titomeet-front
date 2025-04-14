/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react';
import { TableComponent } from '@/components/table.component';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, TableCell, TableRow } from '@heroui/react';
import { Ellipsis } from 'lucide-react';
import { useAdminProvidersStore } from '@/stores/admin/admin.providers.store';
import Link from 'next/link';

export const ActivePrividersPage = () => {

    const { items, isLoading, fetchItems, columnsValue } = useAdminProvidersStore()

    useEffect(() => {
        fetchItems({ status: "ACTIVE" });
    }, []);

    return (
        <div>
            <TableComponent
                objectHookName={useAdminProvidersStore}
                title="Liste des prestataires"
                columns={columnsValue}
                valuesList={items}
                emptyContent={<p>Aucun résultat</p>}
                isLoading={isLoading}
            >
                {items.map((item: any) => (
                    <TableRow key={item.id} className="">
                        <TableCell as={Link}> {item?.name}  </TableCell>
                        <TableCell as={Link}>{item.category.name}</TableCell>
                        <TableCell as={Link}>{item?.address?.name}</TableCell>
                        <TableCell as={Link}>{item?.website}</TableCell>
                        <TableCell >
                            <div>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <div className="flex items-center justify-center">
                                            <Ellipsis className="text-default-300" />
                                        </div>

                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                        <DropdownItem key="new">New file</DropdownItem>
                                        <DropdownItem key="copy">Copy link</DropdownItem>
                                        <DropdownItem key="edit">Edit file</DropdownItem>
                                        <DropdownItem key="delete" className="text-danger" color="danger">
                                            Delete file
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </TableCell>

                    </TableRow>
                ))}

            </TableComponent>
        </div>
    );
}

