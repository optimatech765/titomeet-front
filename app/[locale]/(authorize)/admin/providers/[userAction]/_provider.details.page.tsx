
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
import { useParams, useRouter } from "next/navigation";
import { DemandeSkeleton } from "./_loader";

export const DetailsDemande = () => {
    const { userAction } = useParams();
    const { item, isLoading, fetchSingleItem, submitUpdateItem, isSubmitLoading } = useAdminProvidersStore()
    const router = useRouter();

    useEffect(() => {
        fetchSingleItem(userAction as string);
    }, []);

    return (
        <Fragment>
            {isLoading ? <>
                <DemandeSkeleton />
            </> : <> <div className="p-6 space-y-6 max-w-4xl mx-auto">
                <h1 className="text-xl font-bold flex gap-2 cursor-pointer " onClick={() => router.back()}>
                    <ChevronLeft size={32} /> <span>Détails de la demande</span> </h1>

                {/* Carte principale */}
                <Card className="shadow-lg ring-1 ring-gray-900/5 rounded-box">
                    <CardBody className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div className="flex justify-center border-r border-gray-300">
                            <Avatar
                                src={item?.image}
                                size="lg"
                                className="mx-auto md:mx-0 h-32 w-32 rounded-full"
                            />

                        </div>

                        <div className="col-span-3 grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-500 text-sm">Nom du prestataire/entreprise</p>
                                <p className="font-semibold">{item?.name}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Categorie de service</p>
                                <p className="font-semibold">{item?.category?.name}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Localisation</p>
                                <p className="font-semibold">{item?.address?.name}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Adresse mail</p>
                                <p className="font-semibold">{item?.email}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Numero de telephone</p>
                                <p className="font-semibold">{item?.phoneNumber}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Site web</p>
                                <p className="font-semibold">{item?.website}</p>
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
                                    {item?.description}
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Informations tarifaires</p>
                                <p className="text-sm text-gray-600">
                                    {item?.pricingDetails}
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

                    {(item?.status === "PENDING" || item?.status === "REJECTED") &&
                        <Button
                            isLoading={isSubmitLoading}
                            onPress={() => submitUpdateItem({ id: item.id, status: "APPROVED" })}
                            size="sm"
                            color="primary"
                            radius="full"
                            className="bg-primary text-white px-8"
                        >Approuver</Button>
                    }

                    {item?.status === "APPROVED" &&
                        <Button

                            isLoading={isSubmitLoading}
                            onPress={() => submitUpdateItem({ id: item.id, status: "REJECTED" })}
                            size="sm"
                            color="danger"
                            radius="full"
                            className="bg-tertiary text-primary px-8">
                            Refuser
                        </Button>
                    }

                </div>
            </div></>}
        </Fragment>

    );
}
