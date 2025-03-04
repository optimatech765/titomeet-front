"use cclient"
import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@heroui/react";
import { Plus } from "lucide-react";

export const EventRegisterModal = ({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) => {


    return (
        <>
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} classNames={{closeButton: 'text-primary'}}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <div className=" gap-2">
                                    <h3 className="text-2xl font-semibold  text-center">
                                        Confirmation de l’inscription
                                    </h3>
                                    <p className="text-sm font-light text-center">
                                        Completez votre inscription en un clic
                                    </p>

                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col gap-3">
                                    <Input
                                        type="number"
                                        labelPlacement={"outside"}
                                        label="Nombre de participants"
                                        radius="full"
                                        placeholder="Nombre de tickets"
                                        className="mt-2 border-1 rounded-full"
                                        endContent={<Plus className="w-4 h-4 cursor-pointer "
                                        />}
                                    />

                                    <Input
                                        type="email"
                                        labelPlacement={"outside"}
                                        label="Adresse mail de reception de ticket"
                                        radius="full"
                                        placeholder="Adresse mail de reception de ticket"
                                        className="mt-2 border-1 rounded-full"
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="w-full bg-primary text-white  " radius="full" onPress={onClose}>
                                    Acheter ticket
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

