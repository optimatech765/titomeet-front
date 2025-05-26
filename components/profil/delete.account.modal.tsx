import { useScopedI18n } from '@/locales/client';
import { Button, Modal, ModalBody, ModalContent } from '@heroui/react';
import { Trash2 } from 'lucide-react';
import React from 'react';

export const DeleteAccountModal = ({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) => {

     const buttonT = useScopedI18n('button');
        const deleteAccountT = useScopedI18n('deleteAccount');
    return (
        <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} classNames={{ closeButton: 'text-primary' }}>
            <ModalContent >
                {(onClose) => (
                    <>

                        <div className='px-6 pt-5 mb-2'>
                            <div className="w-fit bg-tertiary rounded-full p-3 mx-auto">
                                   <Trash2 size={32} className='text-primary ' />
                            </div>
                         
                            <h3 className="text-2xl  font-semibold  text-center">
                               {deleteAccountT("question")}
                            </h3>
                            <p className="text-sm font-light text-center">
                               {deleteAccountT("message")}
                            </p>

                        </div>

                        <ModalBody>
                            <div className="flex justify-center justify-items-stretch items-center gap-3 mb-2">

                                <Button className="w-full bg-primary text-white  " radius="full" onPress={onClose}>
                                    {buttonT("confirm")}
                                </Button>

                                <Button variant='bordered' className="w-full border-primary text-primary  " radius="full" onPress={onClose}>
                                  {buttonT("cancel")}
                                </Button>

                            </div>
                        </ModalBody>

                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

