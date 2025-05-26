
import { useScopedI18n } from '@/locales/client';
import { Button, Modal, ModalBody, ModalContent } from '@heroui/react';
import { ShieldBan } from 'lucide-react';
import React from 'react';

export const DesactiveAccountModal = ({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const accountT = useScopedI18n('account');
    const buttonT = useScopedI18n('button');
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
                               {accountT("deactive")}
                            </h3>
                            <p className="text-sm font-light text-center">
                              {accountT("deactiveMessage")}
                            </p>

                        </div>

                        <ModalBody>
                            <div className="flex justify-center justify-items-stretch items-center gap-3 mb-2">

                                <Button className="w-full bg-primary text-white  " radius="full" onPress={onClose}>
                                    {buttonT("confirm")}
                                </Button>

                                <Button variant='bordered' className="w-full border-primary text-primary  " radius="full" onPress={onClose}>
                                   { buttonT("cancel")}
                                </Button>

                            </div>
                        </ModalBody>

                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

