/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from 'react';
import { Button, Card, CardBody, CardHeader, DateRangePicker, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import { StatusComponent } from '../status.component';
import { ChevronsUpDown, EllipsisIcon, Search } from 'lucide-react';

interface ColumnsDto {
    name: string;
    uid: string;
    sortable: boolean;
}

export const AdminTableComponent = ({
    columns,
    valuesList,
    title,
    emptyContent,
}: {
    title: string,
    columns: ColumnsDto[],
    valuesList: any[],
    emptyContent: ReactNode,
}) => {

    const [filterValue, setFilterValue] = useState("");
    const renderCell = React.useCallback((item: any, columnKey: any) => {
        const cellValue = item[columnKey];

        switch (columnKey) {

            case "status":
                return (
                    <StatusComponent status={cellValue} />
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
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

    const onSearchChange = React.useCallback((value: string) => {
        if (value) {
            setFilterValue(value);
            // setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    return (
        <div className=" w-full">
            <div className="flex justify-between">
                <h2 className="text-2xl font-extrabold mb-2"> {title}</h2>
                <Pagination
                    radius="full"
                    showControls
                    classNames={{
                        cursor: `bg-slate-300 text-black`
                        // "bg-foreground text-background",
                    }}
                    color="default"
                    isDisabled={false}//{hasSearchFilter}
                    page={1}
                    total={15}
                    variant="light"
                // onChange={setPage}
                />
            </div>

            <Card className="border-1 mt-3">
                <CardHeader>
                    <div className={"flex w-full flex-wrap justify-between gap-9"}>
                        <div className={"flex items-center md:w-1/4 gap-4"} >
                            <Select
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
                                <p className="font-thin text-xs text-black ">0 à {23} sur {100} </p>
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
                            />
                        </div>

                    </div>
                </CardHeader>
                <CardBody>

                    <Table
                        aria-sort='none'
                        // isVirtualized={true}
                        fullWidth={true}
                        removeWrapper
                        aria-label="Example static collection table"
                        className='mt-2'
                        classNames={{
                            th: "text-sm font-medium text-gray-700 bg-slate-300",
                            tbody: " font-semibold",
                            wrapper: "overflow-auto max-h-[200px] shadow-xl",
                            base: "overflow-auto w-full"
                        }} >
                        <TableHeader
                            className=''
                            columns={columns}

                        >
                            {(column) => (
                                <TableColumn
                                    key={column.uid}
                                    align={column.uid === "actions" ? "center" : "start"}
                                    allowsSorting={column.sortable}
                                >
                                    {column.name}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody items={valuesList} emptyContent={emptyContent}>
                            {(item) => (
                                <TableRow key={item.id}>
                                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                </CardBody>

            </Card>
        </div>
    );
}
