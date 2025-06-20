/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { ReactNode, useState } from 'react';
import { Card, CardBody, CardHeader, DateRangePicker, Input, Pagination, Select, SelectItem, Table, TableBody, TableColumn, TableHeader } from '@heroui/react';
import { ChevronsUpDown, Search } from 'lucide-react';


interface ColumnsDto {
    name: string;
    uid: string;
    sortable: boolean;
}

export const TableComponent = ({
    showSearchBar = true,
    objectHookName,
    isLoading = false,
    columns,
    valuesList,
    title,
    emptyContent,
    children
}: {
    showSearchBar?: boolean,
    objectHookName: any,
    isLoading?: boolean,
    title: string,
    columns: ColumnsDto[],
    valuesList: any[],
    emptyContent: ReactNode,
    children: any
}) => {

    const { fetchItems, DataListConfig } = objectHookName();

    const {
        page,
        totalItems,
        perPageItems
    } = DataListConfig

    const [filterValue, setFilterValue] = useState("");

    const onSearchChange = React.useCallback((value: string) => {
        if (value) {
            setFilterValue(value)
            fetchItems({ search: value, page: 1, pageSize: perPageItems })
        } else {
            setFilterValue("")
            fetchItems({ limit: perPageItems, page: 1 })
        }
    }, []);

    return (
        <div className=" w-full">
            <div className="flex justify-between">
                <h2 className="text-2xl font-extrabold mb-2"> {title}</h2>

                {showSearchBar &&
                    <Pagination
                        radius="full"
                        showControls
                        classNames={{
                            cursor: `bg-secondary-blue text-white`,
                        }}
                        color="default"
                        isDisabled={false}//{hasSearchFilter}
                        page={page}
                        total={Math.ceil(+totalItems / +perPageItems)}
                        variant="light"
                        onChange={(e) => fetchItems({ page: e, limit: perPageItems })}
                    />
                }
            </div>

            <Card className="border-1 mt-3">
                {showSearchBar &&
                    <CardHeader>
                        <div className={"flex w-full flex-wrap justify-between gap-9"}>
                            <div className={"flex items-center md:w-1/3 gap-4"} >
                                <Select
                                    defaultSelectedKeys={[+perPageItems]}
                                    selectionMode={"single"}
                                    value={+perPageItems}
                                    onChange={(e) => fetchItems({ limit: e.target.value, page: 1 })}
                                    classNames={{
                                        trigger: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none",
                                        base: "md:w-1/4"
                                    }}
                                    selectorIcon={<ChevronsUpDown className='text-slate-300' />} >
                                    <SelectItem key={10}>10</SelectItem>
                                    <SelectItem key={25}>25</SelectItem>
                                    <SelectItem key={50}>50</SelectItem>
                                    <SelectItem key={75}>75</SelectItem>
                                    <SelectItem key={100}>100</SelectItem>
                                </Select>
                                <div className={""}>
                                    <p className="font-thin text-xs text-black ">{+perPageItems * (+page - 1)} à {+page * +perPageItems} sur {totalItems} </p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Input
                                    value={filterValue}
                                    type='search'
                                    onClear={() => setFilterValue("")}
                                    onValueChange={onSearchChange}
                                    classNames={{
                                        input: "w-full bg-white",
                                        base: "w-full bg-white",
                                        inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                                    }}
                                    startContent={<Search className='text-slate-300' />} placeholder="Rechercher" />
                            </div>
                            <div>
                                <DateRangePicker
                                    classNames={{
                                        selectorIcon: "text-primary",
                                        inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                                    }}
                                    selectorButtonPlacement={"start"}
                                    size='md' className="max-w-xs"
                                    aria-label='Intervalle de date'
                                    onChange={(value: any) => {
                                        fetchItems({ startDate: value?.start.toString(), endDate: value?.end.toString() })
                                    }
                                    }
                                />
                            </div>

                        </div>
                    </CardHeader>
                }

                <CardBody>

                    <Table
                        aria-sort='none'
                        // isVirtualized={true}
                        fullWidth={true}
                        removeWrapper
                        aria-label="Example static collection table"
                        className='mt-2'
                        classNames={{
                            th: "text-sm font-medium text-white bg-secondary-blue hover",
                            tbody: " font-semibold",
                            wrapper: "overflow-auto max-h-[200px] shadow-xl",
                            base: "overflow-auto w-full",
                            thead: "hover:text-white"
                        }} >
                        <TableHeader
                            columns={columns}
                            className='bg-secondary-blue hover:text-white'


                        >
                            {(column) => (
                                <TableColumn
                                    key={column.uid}
                                    align={column.uid === "actions" ? "center" : "start"}
                                    allowsSorting={column.sortable}
                                    className='hover:text-white'
                                >
                                    {column.name}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody
                            loadingContent={<p>Chargement des données</p>}
                            isLoading={isLoading}
                            items={valuesList}
                            emptyContent={emptyContent}
                        >
                            {children}
                        </TableBody>
                    </Table>

                </CardBody>

            </Card>
        </div>
    );
}
