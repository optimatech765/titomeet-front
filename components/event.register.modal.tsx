/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Divider,
} from "@heroui/react";
import { Plus } from "lucide-react";
import { useEventsStore } from "@/stores/events.store";
import { useParams } from "next/navigation";

interface shopInterface {
    productName: string;
    productQuantity: number;
    productPrice: number;
    totalPrice: number;
    id: string;
}
export const EventRegisterModal = ({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) => {

    const { singleEvent, isLoading } = useEventsStore();
    const [shopCart, setshopCart] = useState<shopInterface[]>([]);
    const params = useParams();
    const event = params?.eventId

    const handleChange = (e: any, index: number) => {
        const newShopCart = [...shopCart];
        newShopCart[index].productQuantity = e.target.value;
        setshopCart(newShopCart);
    }

    const handleAddQuantity = (index: number) => {
        const newShopCart = [...shopCart];
        newShopCart[index].productQuantity = newShopCart[index].productQuantity + 1;
        setshopCart(newShopCart);
    }

    const totalPrice = shopCart?.reduce((acc, curr) => acc + curr.productPrice * curr.productQuantity, 0);

    useEffect(() => {
        const newShopCart = singleEvent?.prices?.map((item: any) => ({
            productName: `${item?.name}-${item?.amount} XOF`,
            productQuantity: 0,
            productPrice: +item?.amount,
            totalPrice: 0,
            id: item?.id
        })) as shopInterface[];
        setshopCart(newShopCart);

    }, []);


    return (
        <>
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} classNames={{ closeButton: 'text-primary' }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <div className='px-6 pt-5 mb-2'>
                                <h3 className="text-2xl font-semibold  text-center">
                                    Confirmation de l’inscription
                                </h3>
                                <p className="text-sm font-light text-center">
                                    Completez votre inscription en un clic
                                </p>

                            </div>
                            <ModalBody>
                                <div className="flex flex-col gap-3">

                                    {shopCart?.map((item: any, index: number) => (
                                        <Input
                                            onChange={(e) => handleChange(e, index)}
                                            value={item?.productQuantity}
                                            key={index}
                                            type="number"
                                            labelPlacement={"outside"}
                                            label={<span className="text-sm font-medium text-gray-700">{item?.productName} </span>}
                                            radius="full"
                                            placeholder="Nombre de tickets"
                                            className="mt-2 border-1 rounded-full"
                                            endContent={<Plus onClick={() => handleAddQuantity(index)} className="w-4 h-4 cursor-pointer "
                                            />}
                                        />
                                    ))}

                                    <Input
                                        type="email"
                                        labelPlacement={"outside"}
                                        label={<span className="text-sm font-medium text-gray-700">Adresse mail de reception de ticket</span>}
                                        radius="full"
                                        placeholder="Adresse mail de reception de ticket"
                                        className="mt-2 border-1 rounded-full"
                                    />


                                    <Divider className="mt-2 mb-2" />
                                    <h2 className="text-center">
                                        <span className="text-sm font-medium text-gray-700">
                                            Prix total
                                        </span>
                                    </h2>

                                    <h2 className="text-center">
                                        <span className="text-lg font-medium text-gray-700">
                                            {totalPrice} XOF
                                        </span>
                                    </h2>

                                </div>
                            </ModalBody>
                            {!isLoading &&
                                <ModalFooter>
                                    <Button className="w-full bg-primary text-white  " radius="full" onPress={onClose}>
                                        Acheter ticket
                                    </Button>

                                </ModalFooter>
                            }
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

