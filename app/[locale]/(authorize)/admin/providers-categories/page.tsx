/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { AdminTableComponent } from '@/components/tables/admin.table.component';
import { useAdminEventCategoriesStore } from '@/stores/admin/admin.event.cataegorie.store';
import { useProvidersStore } from '@/stores/providers.store';
import { CategorieDto } from '@/utils/dto/categorie.dto';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, Textarea, useDisclosure } from '@heroui/react';
import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Page = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [categorieData, setCategorieData] = useState<CategorieDto>({
        id: "",
        name: "",
        description: "",
    });
    const { fetchProvidersCategoriesList,
        handleSubmitProvidersCategories,
        isSubmit,
        providersCategoriesList } = useProvidersStore();

    const { columnsValue } = useAdminEventCategoriesStore();

    useEffect(() => {
        fetchProvidersCategoriesList();
    }, []);

    const handleSubmi = () => {
        delete categorieData.id;
        handleSubmitProvidersCategories(categorieData);
    }

    useEffect(() => {
        if (isSubmit === false) {
            onClose();
            setCategorieData({
                id: "",
                name: "",
                description: "",
            });
        }
    }, [isSubmit]);

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-end items-center gap-3'>
                <Button radius={"full"} onPress={onOpen} className='bg-primary text-white'>
                    <Plus />
                    Ajouter une catégorie
                </Button>
            </div>

            <section>
                <AdminTableComponent
                    title={"Liste des catégories des services "}
                    columns={columnsValue}
                    valuesList={providersCategoriesList}
                    emptyContent={<p className="text-center text-gray-500">Aucune catégorie trouvé</p>}
                />
            </section>


            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} classNames={{ closeButton: 'text-primary' }}>
                <ModalContent >
                    {(onClose) => (
                        <>

                            <div className='px-6 pt-5 mb-2'>
                                <h3 className="text-2xl  font-semibold  flex justify-center text-center">
                                    Ajout de catégorie
                                </h3>

                                <p className="text-sm font-light text-center">
                                    Ajouter une nouvelle catégorie
                                </p>

                            </div>

                            <ModalBody>
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
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    onPress={handleSubmi}
                                    disabled={isSubmit}
                                    className="w-full bg-primary text-white  "
                                    radius="full"
                                    isLoading={isSubmit}

                                >
                                    Enregistrer
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Page;
