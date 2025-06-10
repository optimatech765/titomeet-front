/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@heroui/button';
import React, { useState } from 'react';
import InputContainerComponent from '../create-event/input.container.component';
import { useScopedI18n } from '@/locales/client';
import { Input, Modal, ModalBody, ModalContent, useDisclosure } from '@heroui/react';
import { InputErrorStore } from '@/stores/input.error.store';
import { passwordUpdateValidator } from '@/utils/validator/auth.validator';
import { toast } from 'react-toastify';
import { authSevices } from '@/services/auth/authServices';
import { Eye, EyeOff } from 'lucide-react';

export const SecurityProfil = () => {

    const [passwordInfo, setPasswordInfo] = useState({
        oldPassword: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    // const [token, settoken] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const errorFields = InputErrorStore((state: any) => state.errorField);
    const setMessageError = InputErrorStore((state: any) => state.setMessageError);

    const updateProfilT = useScopedI18n("updateProfil");
    const buttonT = useScopedI18n("button");
    const inputT = useScopedI18n("input");
    const passwordT = useScopedI18n("password");

    const [userAction, setUserAction] = useState("password");

    const { onOpen, onClose, isOpen } = useDisclosure();

    const handleOpenModal = (action: string) => {
        setUserAction(action);
        onOpen();
    };


    const handleSubmit = async () => {

        try {

            const { valid, errorData } = passwordUpdateValidator(passwordInfo)
            if (valid) {
                setIsLoading(true);
                // Affiche un toast au début de la requête
                const toastsId = toast.loading("Demande en cours...", {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                authSevices.updatePassword({
                    newPassword: passwordInfo.password,
                    oldPassword: passwordInfo.oldPassword
                }).then(
                    (response) => {

                        toast.update(toastsId, {
                            render: response?.data?.message,
                            type: "success",
                            isLoading: false,
                            autoClose: 1000,
                        });
                        const { data } = response
                        console.log(data)
                       

                    },
                    (error) => {

                        toast.update(toastsId, {
                            render: error?.response?.data?.message,
                            type: "error",
                            isLoading: false,
                            autoClose: 1000,
                        });
                        setIsLoading(false);
                        console.log(error)
                    })

            } else {
                setIsLoading(false);
                console.log(errorData)
                setMessageError({ ...errorData })
                toast.error(errorData?.message)
            }

        } catch (error: unknown) {
            console.log(error)
            toast.error("Une erreur lors de la demande")
        }

    }

    const errors: any = [];

    if (passwordInfo.password.length < 8) {
        errors.push(passwordT("lengthe"));
    }
    if ((passwordInfo.password.match(/[A-Z]/g) || []).length < 1) {
        errors.push(passwordT("expression"));
    }
    if ((passwordInfo.password.match(/[^a-z]/gi) || []).length < 1) {
        errors.push(passwordT("specialCha"));
    }

    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <h2 className="text-2xl font-semibold mb-4">{updateProfilT("sideBarTitle4")}</h2>

                <div className='md:w-1/2 flex flex-col gap-4'>
                
                    <InputContainerComponent title={inputT("passwordLabel")} >
                        <Button onPress={() => handleOpenModal("password")} variant='bordered' size='sm' className="border-secondary-blue w-full text-secondary-blue  px-6 py-2" radius='full' >
                            {buttonT("update")}
                        </Button>

                    </InputContainerComponent>

                    <h2 className="text-2xl font-semibold mb-4">{updateProfilT("securityAuth")}</h2>
                    <InputContainerComponent title={"Google"} >
                        <Button onPress={() => handleOpenModal("google")} variant='bordered' size='sm' className="border-secondary-blue w-full text-secondary-blue  px-6 py-2" radius='full' >
                            {updateProfilT("securityLinkAccount")}
                        </Button>

                    </InputContainerComponent>

                    <InputContainerComponent title={"Facebook"} >
                        <Button onPress={() => handleOpenModal("facebook")} variant='bordered' size='sm' className="border-secondary-blue w-full text-secondary-blue  px-6 py-2" radius='full' >
                            {updateProfilT("securityLinkAccount")}
                        </Button>

                    </InputContainerComponent>
                </div>

            </div>

            {/* Bouton sauvegarder */}
            <div className="mt-6">
                <Button className="bg-red-500 text-white px-6 py-2" radius='full' >
                    {buttonT("save")}
                </Button>
            </div>



            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} classNames={{ closeButton: 'text-primary' }}>
                <ModalContent >

                    <div className='px-6 pt-5 mb-2'>
                        <h3 className="text-2xl  font-semibold  text-center">
                            {userAction == "password" && "Modification de mot de passe"}
                            {userAction == "google" && "Authentification Google"}
                            {userAction == "facebook" && "Authentification Facebook"}
                        </h3>

                    </div>

                    <ModalBody>
                        <div className="flex flex-col justify-center justify-items-stretch items-center gap-3">

                            {userAction == "password" &&
                                <>
                                    <div className="space-y-2 w-full">

                                        <div className="mb-1 space-y-0.5">
                                            <label className="block text-sm font-medium">Ancien mot de passe</label>
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
                                                endContent={showPassword ?
                                                    <EyeOff className='cursor-pointer text-primary'
                                                        size={20} onClick={() => setShowPassword(!showPassword)} /> :
                                                    <Eye size={20} className='text-primary cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                                                fullWidth
                                                value={passwordInfo?.oldPassword}
                                              
                                                name="oldPassword"
                                                isRequired
                                                errorMessage={() => (
                                                    <ul>
                                                        {errors.map((error: string, i: number) => (
                                                            <li key={i}>{error}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                                radius={"full"}
                                                placeholder={inputT("passwordPlaceholder")}
                                                onChange={(e) => setPasswordInfo({ ...passwordInfo, oldPassword: e.target.value })}
                                            />

                                        </div>


                                        <div className="mb-1 space-y-0.5">
                                            <label className="block text-sm font-medium">{inputT("passwordLabel")}</label>
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
                                                endContent={showPassword ?
                                                    <EyeOff className='cursor-pointer text-primary'
                                                        size={20} onClick={() => setShowPassword(!showPassword)} /> :
                                                    <Eye size={20} className='text-primary cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                                                fullWidth
                                                value={passwordInfo?.password}
                                                isInvalid={errors?.length > 0 || errorFields.field === 'password'}
                                                name="password"
                                                isRequired
                                                errorMessage={() => (
                                                    <ul>
                                                        {errors.map((error: string, i: number) => (
                                                            <li key={i}>{error}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                                radius={"full"}
                                                placeholder={inputT("passwordPlaceholder")}
                                                onChange={(e) => setPasswordInfo({ ...passwordInfo, password: e.target.value })}
                                            />

                                        </div>

                                        <div className="mb-1 space-y-0.5">
                                            <label className="block text-sm font-medium">{inputT("passwordConfirmLabel")}</label>
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
                                                endContent={showPassword ? <EyeOff className='text-primary cursor-pointer' size={20} onClick={() => setShowPassword(!showPassword)} /> : <Eye size={20} onClick={() => setShowPassword(!showPassword)} className='text-primary cursor-pointer' />}
                                                fullWidth
                                                value={passwordInfo?.confirmPassword}
                                                isInvalid={errorFields.field === 'confirmPassword'}
                                                name="confirmPassword"
                                                isRequired
                                                errorMessage={errorFields?.message}
                                                radius={"full"}
                                                placeholder={inputT("passwordConfirmPlaceholder")}
                                                onChange={(e) => setPasswordInfo({ ...passwordInfo, confirmPassword: e.target.value })}
                                            />

                                        </div>

                                    </div>

                                    <div className="mt-3">
                                        <Button
                                            onPress={() =>{
                                                 handleSubmit();
                                                onClose(); 
                                            }}
                                            isLoading={isLoading}
                                            radius='full'
                                            className="w-full bg-red-500 hover:bg-red-600 text-white">
                                            {buttonT("confirm")}
                                        </Button>
                                    </div>
                                </>
                            }


                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}
