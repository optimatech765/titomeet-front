import { Button, Modal, ModalBody, ModalContent, ModalFooter } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

export const PaiementModalComponent = ({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    return (
        <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} classNames={{ closeButton: 'text-primary' }}>
            <ModalContent >
                {(onClose) => (
                    <>

                        <div className='px-6 pt-5 mb-2'>
                            <h3 className="text-2xl  font-semibold  text-center">
                                Methode de paiment
                            </h3>
                            <p className="text-sm font-light text-center">
                                Selectionnez votre methode de paiment
                            </p>

                        </div>

                        <ModalBody>
                            <div className="flex justify-center justify-items-stretch items-center gap-3">
                                <div className='border-1 rounded-md '>
                                    <Image src="/img/fedapay.png" alt="fedapay" width={120} height={50} />
                                </div>
                                <div className='border-1 rounded-md h-full'>
                                    <Image src="/img/stripe.png" alt="stripe" width={120} height={50} className='my-7 mx-3' />
                                </div>
                                <div className='border-1 rounded-md h-full'>
                                    <Image src="/img/kkiapay.png" alt="kkiapay" width={120} height={50} className='my-10 mx-3' />
                                </div>

                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="w-full bg-primary text-white  " radius="full" onPress={onClose}>
                                Confirmer
                            </Button>

                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
