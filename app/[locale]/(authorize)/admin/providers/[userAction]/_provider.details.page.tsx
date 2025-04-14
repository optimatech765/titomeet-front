
import React, { Fragment, useEffect } from "react";
import {
    Card,
    CardBody,
    Button,
    Avatar,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@heroui/react";
import { ChevronLeft, EllipsisVertical } from "lucide-react";
import { useAdminProvidersStore } from "@/stores/admin/admin.providers.store";
import { useParams } from "next/navigation";
import { DemandeSkeleton } from "./_loader";

export const DetailsDemande = () => {
    const { userAction } = useParams();
    const {item, isLoading, fetchSingleItem, } = useAdminProvidersStore()

    useEffect(() => {
        fetchSingleItem(userAction as string);
    }, []);
    return (
        <Fragment>
            {isLoading ? <>
                <DemandeSkeleton />
            </> : <> <div className="p-6 space-y-6 max-w-4xl mx-auto">
                <h1 className="text-xl font-bold flex gap-2">
                    <ChevronLeft size={32} /> <span>Détails de la demande</span> </h1>

                {/* Carte principale */}
                <Card className="shadow-lg ring-1 ring-gray-900/5 rounded-box">
                    <CardBody className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div className="flex justify-center border-r border-gray-300">
                            <Avatar
                                src="https://i.pravatar.cc/150?img=3"
                                size="lg"
                                className="mx-auto md:mx-0 h-32 w-32 rounded-full"
                            />

                        </div>

                        <div className="col-span-3 grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-500 text-sm">Nom du prestataire/entreprise</p>
                                <p className="font-semibold">{item?.name}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Categorie de service</p>
                                <p className="font-semibold">Location</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Localisation</p>
                                <p className="font-semibold">Cotonou</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Adresse mail</p>
                                <p className="font-semibold">Location</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Numero de telephone</p>
                                <p className="font-semibold">1111111111</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Site web</p>
                                <p className="font-semibold">1111111111</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                {/* Description & Tarifs */}
                <Card className="shadow-lg ring-1 ring-gray-900/5 rounded-box">
                    <CardBody>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">Description du service</p>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Informations tarifaires</p>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                </p>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                {/* Documents */}
                <div>
                    <p className="text-lg font-semibold mb-2">Documents & Justificatifs</p>
                    <Card className="shadow-lg ring-1 ring-gray-900/5 rounded-box">
                        <CardBody className="">
                            <Table removeWrapper isStriped
                                classNames={{
                                    th: "text-sm font-medium text-white bg-secondary-blue hover",
                                }}
                            >
                                <TableHeader>
                                    <TableColumn>DOCUMENT</TableColumn>
                                    <TableColumn>ACTION</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Registredecommerce.pdf</TableCell>
                                        <TableCell>
                                            <EllipsisVertical className="h-5 w-5 cursor-pointer" />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>IFU.pdf</TableCell>
                                        <TableCell>
                                            <EllipsisVertical className="h-5 w-5 cursor-pointer" />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>

                {/* Boutons */}
                <div className="flex justify-end space-x-4">
                   
                    <Button size="sm" color="primary" radius="full" className="bg-primary text-white" >Approuver</Button>
                    <Button size="sm" color="danger" radius="full" className="bg-tertiary text-primary">
                        Refuser
                    </Button>
                </div>
            </div></>}
        </Fragment>

    );
}
