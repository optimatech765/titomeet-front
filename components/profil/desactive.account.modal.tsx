
import { Button, Modal, ModalBody, ModalContent } from '@heroui/react';
import { ShieldBan } from 'lucide-react';
import React from 'react';

export const DesactiveAccountModal = ({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    return (
        <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} classNames={{ closeButton: 'text-primary' }}>
            <ModalContent >
                {(onClose) => (
                    <>

                        <div className='px-6 pt-5 mb-2'>
                            <div className="w-fit bg-tertiary rounded-full p-3 mx-auto">
                                <ShieldBan size={32} className='text-primary ' />
                            </div>
                            <h3 className="text-2xl  font-semibold  text-center">
                                Souhaitez vous désactiver votre compte ?
                            </h3>
                            <p className="text-sm font-light text-center">
                                Il sera impossible de vous connecter à votre compte.
                            </p>

                        </div>

                        <ModalBody>
                            <div className="flex justify-center justify-items-stretch items-center gap-3 mb-2">

                                <Button className="w-full bg-primary text-white  " radius="full" onPress={onClose}>
                                    Confirmer
                                </Button>

                                <Button variant='bordered' className="w-full border-primary text-primary  " radius="full" onPress={onClose}>
                                    Annuler
                                </Button>

                            </div>
                        </ModalBody>

                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

