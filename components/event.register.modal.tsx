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
import { useParams, useRouter } from "next/navigation";
import { eventSevices } from "@/services/events/event.services";
import { toast } from "react-toastify";
import { useAppContext } from "@/context";

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
    const { isAuth } = useAppContext();
    const [shopCart, setshopCart] = useState<shopInterface[]>([]);
    const [buyerInfo, setBuyerInfo] = useState<any>({});
    const [clientEmail, setClientEmail] = useState<string>(isAuth?.email ?? "");
    const [buyLoading, setBuyLoading] = useState<boolean>(false);
    const params = useParams();
    const event = params?.eventId
    const router = useRouter();


    const handleChange = (e: any, index: number) => {
        const newShopCart = [...shopCart];
        newShopCart[index].productQuantity = e.target.value;
        setshopCart(newShopCart);
    }

    const handleAddQuantity = (index: number) => {
        const newShopCart = [...shopCart];
        newShopCart[index].productQuantity = +newShopCart[index].productQuantity + 1;
        setshopCart(newShopCart);
    }

    const totalPrice = shopCart?.reduce((acc, curr) => acc + curr.productPrice * curr.productQuantity, 0) || 0;

    const handleShoppingCart = async () => {

        try {
            setBuyLoading(true);
            const data = shopCart?.map((item: any) => ({
                quantity: +item?.productQuantity,
                priceId: item?.id,
            }))


            let cartData: any = {
                callbackUrl: isAuth ? `${process.env.NEXT_PUBLIC_FRONT_URL}/user/events/${event}/order-confirm` : `${process.env.NEXT_PUBLIC_FRONT_URL}/events/${event}/order-confirm`,
                eventId: event as string,
                email: clientEmail,
                items: data,
            }

            if (!isAuth || isAuth?.email==="") {
                cartData = {
                    ...cartData,
                    firstName: buyerInfo?.firstName,
                    lastName: buyerInfo?.lastName,
                }
            }

            eventSevices.buyTicket(event as string, cartData).then(
                (response) => {
                    console.log(response);
                    toast.success("Vous avez acheté votre ticket");
                    if (singleEvent.accessType === "PAID") {
                        router.push(response.data.url);
                    } else {
                        router.push(`/user/events/${event}/order-confirm`);
                    }

                },
                (error) => {
                    console.log(error);
                    toast.error("Une erreur est survenue lors de l'achat");
                    setBuyLoading(false);
                }
            )
        } catch (error) {
            setBuyLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        const newShopCart = singleEvent?.prices?.map((item: any) => ({
            productName: `${item?.name}-${item?.amount} XOF`,
            productQuantity: 0,
            productPrice: +item?.amount || 0,
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

                                    {!isAuth && <>
                                        <Input
                                            value={buyerInfo?.firstName}
                                            onChange={(e) => setBuyerInfo({ ...buyerInfo, firstName: e.target.value })}
                                            labelPlacement={"outside"}
                                            label={<span className="text-sm font-medium text-gray-700">Prénom de l&lsquo;acheteur</span>}
                                            radius="full"
                                            placeholder="Prénom de l'acheteur"
                                            className="mt-2 border-1 rounded-full"
                                        />
                                        <Input
                                            value={buyerInfo?.lastName}
                                            onChange={(e) => setBuyerInfo({ ...buyerInfo, lastName: e.target.value })}

                                            labelPlacement={"outside"}
                                            label={<span className="text-sm font-medium text-gray-700">Nom de l&lsquo;acheteur</span>}
                                            radius="full"
                                            placeholder="Nom de l'acheteur"
                                            className="mt-2 border-1 rounded-full"
                                        />
                                    </>}

                                    <Input
                                        value={clientEmail}
                                        onChange={(e) => setClientEmail(e.target.value)}
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
                                    <Button isDisabled={buyLoading} className="w-full bg-primary text-white  " radius="full" onPress={onClose}>
                                        Annuler
                                    </Button>

                                    <Button isLoading={buyLoading} className="w-full bg-primary text-white  " radius="full" onPress={handleShoppingCart}>
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

