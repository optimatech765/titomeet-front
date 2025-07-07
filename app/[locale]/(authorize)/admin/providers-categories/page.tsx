/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { TableComponent } from '@/components/table.component';
import { useAdminProvidersCategoriesStore } from '@/stores/admin/admin.providers.categorie.store';
import { CategorieDto } from '@/utils/dto/categorie.dto';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, TableCell, TableRow, Textarea, useDisclosure } from '@heroui/react';
import { Plus, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react';

type actionType = "edit" | "add" | "delete"

const initialVaue = {
    id: "",
    name: "",
    description: "",
    children: []
}

const Page = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [categorieData, setCategorieData] = useState<CategorieDto>(initialVaue);

    const [action, setAction] = useState<actionType>("add");

    const { items, isLoading, fetchItems, columnsValue, submitItem, isSubmitLoading, submitUpdateItem, submitDeleteItem } = useAdminProvidersCategoriesStore()

    useEffect(() => {
        fetchItems();
    }, []);

    const handleSubmi = () => {
        submitItem({
            name: categorieData.name,
            description: categorieData.description,
        });
    }

    useEffect(() => {
        if (isSubmitLoading === false) {
            onClose();
            setCategorieData({
                id: "",
                name: "",
                description: "",
                children: []
            });
        }
    }, [isSubmitLoading]);

    const handleselectItem = (item: CategorieDto, action: actionType) => {
        if (action === "edit") {
            setCategorieData(item);
            setAction("edit");
        } else if (action === "delete") {
            setAction("delete");
            setCategorieData(item);
        } else {
            setCategorieData(initialVaue);
            setAction("add");
        }
        onOpen();
    }

    const handleUpdateItem = () => {
        submitUpdateItem({
            id: categorieData.id,
            name: categorieData.name,
            description: categorieData.description,
        });
        setCategorieData(initialVaue);
        setAction("add");
        onClose();

    }

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-end items-center gap-3'>
                <Button
                    name={"Add"}
                    radius={"full"} onPress={() => handleselectItem(initialVaue, "add")} className='bg-primary text-white'>
                    <Plus />
                    Ajouter une catégorie
                </Button>
            </div>

            <section>

                <TableComponent

                    objectHookName={useAdminProvidersCategoriesStore}
                    title="Liste des catégories des prestataires"
                    columns={columnsValue}
                    valuesList={items}
                    emptyContent={<p>Aucun résultat</p>}
                    isLoading={isLoading}
                >
                    {items.map((item) => (
                        <TableRow key={item.id} onClick={() => handleselectItem(item, "edit")} className="cursor-pointer hover:bg-slate-100">
                            <TableCell className="w-1/4">{item.name}</TableCell>
                            <TableCell className="w-1/4">{item.description}</TableCell>
                            <TableCell className="w-1/4">
                                <Button
                                    name={"icon"}
                                    isIconOnly radius="full" color="danger" onPress={() => handleselectItem(item, "delete")}>
                                    <Trash size={14} />
                                </Button>
                            </TableCell>

                        </TableRow>
                    ))}

                </TableComponent>

            </section>


            <Modal backdrop={"blur"}
                isOpen={isOpen}
                onClose={onClose}
                classNames={{ closeButton: 'text-primary' }}
            >
                <ModalContent >
                    {(onClose) => (
                        <>

                            <div className='px-6 pt-5 mb-2'>
                                <h3 className="text-2xl  font-semibold  flex justify-center text-center">
                                    {action === "add" ? "Ajout de catégorie" : action === "edit" ? "Edition de catégorie" : "Suppression de catégorie"}
                                </h3>
                            </div>

                            <ModalBody>
                                {action === "delete" ? (
                                    <div className="flex flex-col justify-center justify-items-stretch items-center gap-3">
                                        <p className='text-lg font-semibold'>Voulez-vous vraiment supprimer cette catégorie ?</p>
                                        <p className='text-sm text-gray-500'>Cette action est irréversible.</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col justify-center justify-items-stretch items-center gap-3">
                                        <Input
                                            value={categorieData.name}
                                            onChange={(e) => setCategorieData({ ...categorieData, name: e.target.value })}
                                            classNames={{
                                                input: "w-full bg-white",
                                                base: "w-full bg-white",
                                                inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                                            }}
                                            placeholder="Nom de la catégorie"
                                            labelPlacement={"outside"}
                                            label={<span className="text-sm font-medium text-gray-700">Nom de la catégorie</span>}
                                        />

                                        <Textarea
                                            value={categorieData.description}
                                            onChange={(e) => setCategorieData({ ...categorieData, description: e.target.value })}
                                            classNames={{
                                                input: "w-full bg-white",
                                                base: "w-full bg-white",
                                                inputWrapper: "w-full bg-white ring-1 ring-slate-300 focus:none hover:none ",
                                            }}
                                            placeholder="Description de la catégorie"
                                            rows={5}
                                            labelPlacement={"outside"}
                                            label={<span className="text-sm font-medium text-gray-700">Description de la catégorie</span>}

                                        />
                                    </div>
                                )
                                }
                            </ModalBody>

                            <ModalFooter>
                                {action !== "delete" ? (
                                    <Button
                                        name={"modifier"}
                                        onPress={action === "add" ? handleSubmi : handleUpdateItem}
                                        disabled={isSubmitLoading}
                                        className="w-full bg-primary text-white  "
                                        radius="full"
                                        isLoading={isSubmitLoading}

                                    >
                                        {action === "add" ? "Ajouter" : "Modifier"}

                                    </Button>
                                ) : <>

                                    <Button
                                        name={"Supprimer"}
                                        onPress={() => {
                                            submitDeleteItem(categorieData);
                                            onClose();
                                        }}
                                        className="w-full bg-danger text-white  "
                                        radius="full"
                                        isLoading={isSubmitLoading}
                                    >
                                        Supprimer
                                    </Button>
                                    <Button
                                        name={"annuler"}
                                        onPress={onClose}
                                        className="w-full bg-gray-200 text-gray-700  "
                                        radius="full"
                                    >
                                        Annuler
                                    </Button>
                                </>
                                }

                            </ModalFooter>


                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Page;
