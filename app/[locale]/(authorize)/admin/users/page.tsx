/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react';
import { UsersState } from './users.state';
import { useUserStore } from '@/stores/admin/admin.users.store';
import { TableComponent } from '@/components/table.component';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, TableCell, TableRow } from '@heroui/react';
import { formatDate2 } from '@/utils/functions/date.function';
import { Ellipsis } from 'lucide-react';

const Page = () => {

        const { items, isLoading, fetchItems, columnsValue } = useUserStore()
    

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            <section>
                <UsersState />
            </section>

            <section>
            <TableComponent
                    objectHookName={useUserStore}
                    title="Liste des utilisateurs"
                    columns={columnsValue}
                    valuesList={items}
                    emptyContent={<p>Aucun résultat</p>}
                    isLoading={isLoading}
                >
                    {items.map((item: any) => (
                        <TableRow key={item.id} className="">
                            <TableCell > {item?.firstName} {item.lastName}  </TableCell>
                            <TableCell >{item.email}</TableCell>
                            <TableCell >{item?.address?.name}</TableCell>
                            <TableCell >{formatDate2(item?.createdAt)}</TableCell>
                            <TableCell >{item?.role}</TableCell>
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
        </div>
    );
}

export default Page;


