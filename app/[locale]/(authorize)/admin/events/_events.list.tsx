/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { StatusComponent } from '@/components/status.component';
import { TableComponent } from '@/components/table.component';
import { useAdminEventsStore } from '@/stores/admin/admin.events.store';
import { formatDate2 } from '@/utils/functions/date.function';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, TableCell, TableRow } from '@heroui/react';
import { Ellipsis } from 'lucide-react';
import React from 'react';
import { useEffect } from 'react';

export const EventsList = () => {

    const { items, isLoading, fetchItems, columnsValue } = useAdminEventsStore()

    useEffect(() => {
        fetchItems()

    }, []);
    return (
        <section>
            <section>

                <TableComponent
                    objectHookName={useAdminEventsStore}
                    title="Liste des Evènements"
                    columns={columnsValue}
                    valuesList={items}
                    emptyContent={<p>Aucun résultat</p>}
                    isLoading={isLoading}
                >
                    {items.map((item: any) => (
                        <TableRow key={item.id} className="">
                            <TableCell >{formatDate2(item.startDate)}</TableCell>
                            <TableCell >{item.name}</TableCell>
                            <TableCell >{item.categories.map((cat: any) => cat.name).join(", ")}</TableCell>
                            <TableCell >{item?.postedBy?.firstName} {item?.postedBy?.lastName}</TableCell>
                            <TableCell >{item?.participants?.length}</TableCell>
                            <TableCell ><StatusComponent status={item.status} /></TableCell>
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
            </section>

        </section>
    );
}




