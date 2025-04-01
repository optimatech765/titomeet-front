/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { authSevices } from '@/services/auth/authServices';
import { useAuthStore } from '@/stores/auth';
import { InputErrorStore } from '@/stores/input.error.store';
import { SignUpDto } from '@/utils/dto/auth.dto';
import { registerValidator } from '@/utils/validator/auth.validator';
import { Button, Checkbox, Input } from '@heroui/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const RegisterPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState<SignUpDto>({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const errorFields = InputErrorStore((state: any) => state.errorField);
    const setMessageError = InputErrorStore((state: any) => state.setMessageError);
    const { setToken, setRefreshToken } = useAuthStore();

    const handleSubmit = async () => {
        try {

            const { confirmPassword, ...newData } = registerInfo
            const { error, errorData } = registerValidator(registerInfo);

            if (!error) {
                setIsLoading(true);
                // Affiche un toast au début de la requête
                const toastsId = toast.loading("Inscription en cours...", {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                authSevices.register(newData).then(
                    (response) => {

                        toast.update(toastsId, {
                            render: "Inscription éffectuée avec succès",
                            type: "success",
                            isLoading: false,
                            autoClose: 1000,
                        });
                        setToken(response?.data?.token);
                        setRefreshToken(response?.data?.refreshToken);
                        console.log(response);
                        setIsLoading(false);
                    },
                    (error) => {

                        toast.update(toastsId, {
                            render: error?.response?.data?.message,
                            type: "error",
                            isLoading: false,
                            autoClose: 1000,
                        });

                        console.log(error);
                        setIsLoading(false);
                    })
            }
            else {
                setMessageError(errorData);
            }


        } catch (error: any) {
            console.log(error)
            toast.error("Erreur dans l'inscription", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
            })
        }

    }

    useEffect(() => {
        const { errorData } = registerValidator(registerInfo);
        setMessageError(errorData);
    }, [registerInfo]);

    return (
        <div className='py-10'>
            <div className=" flex justify-center items-center">

                <Image alt='dd' src={'/img/auth-logo.png'} width={120} height={60} />

            </div>
            <div className="text-center mb-6">
                <h2 className="text-base font-semibold">Connectez vous à votre compte</h2>
                <p className="text-gray-500 text-xs font-light">Sélectionnez votre méthode de connexion</p>
            </div>

            <div className="flex gap-4 justify-center mb-1">
                <Button variant="flat" className="flex items-center gap-1 flex-1 h-9">
                    <Image alt='dd' src={'/img/google.png'} width={100} height={50} className='h-4 w-4' /> Google
                </Button>
                <Button variant="flat" className="flex items-center gap-1 flex-1 h-9 ">
                    <Image alt='dd' src={'/img/facebook.png'} width={100} height={50} className='h-4 w-4' /> Facebook
                </Button>
            </div>

            <div className="flex items-center mt-1 mb-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-400">Ou connectez-vous avec</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="mb-2 space-y-0.5">
                <label className="block text-sm font-medium">Prénom</label>
                <Input
                    value={registerInfo?.firstName}
                    isInvalid={errorFields.field === 'firstName'}
                    errorMessage={errorFields?.message}
                    onChange={(e) => setRegisterInfo({ ...registerInfo, firstName: e.target.value })}
                    radius={"full"} className='rounded-full' placeholder="Entrez votre prénom" />
            </div>
            <div className="mb-1 space-y-0.5">
                <label className="block text-sm font-medium">Nom</label>
                <Input
                    value={registerInfo?.lastName}
                    isInvalid={errorFields.field === 'lastName'}
                    errorMessage={errorFields?.message}
                    onChange={(e) => setRegisterInfo({ ...registerInfo, lastName: e.target.value })}
                    radius={"full"} placeholder="Entrez votre nom" />
            </div>

            <div className="mb-1 space-y-0.5">
                <label className="block text-sm font-medium">Nom d&apos;utilisateur</label>
                <Input
                    value={registerInfo?.username}
                    isInvalid={errorFields.field === 'username'}
                    errorMessage={errorFields?.message}
                    onChange={(e) => setRegisterInfo({ ...registerInfo, username: e.target.value })}
                    radius={"full"} placeholder="Entrez votre nom d'utilisateur" />
            </div>

            <div className="mb-2 space-y-0.5">
                <label className="block text-sm font-medium">Email</label>
                <Input
                    value={registerInfo?.email}
                    isInvalid={errorFields.field === 'email'}
                    errorMessage={errorFields?.message}
                    onChange={(e) => setRegisterInfo({ ...registerInfo, email: e.target.value })}
                    radius={"full"} type="email" className='rounded-full' placeholder="Entrez votre adresse email" />
            </div>
            <div className="mb-1 space-y-0.5">
                <label className="block text-sm font-medium">Mot de passe</label>
                <Input
                    value={registerInfo?.password}
                    isInvalid={errorFields.field === 'password'}
                    errorMessage={errorFields?.message}
                    onChange={(e) => setRegisterInfo({ ...registerInfo, password: e.target.value })}
                    radius={"full"} type="password" placeholder="Entrez votre mot de passe" />
            </div>

            <div className="mb-1 space-y-0.5">
                <label className="block text-sm font-medium">Confirmer le mot de passe</label>
                <Input
                    value={registerInfo?.confirmPassword}
                    isInvalid={errorFields.field === 'confirmPassword'}
                    errorMessage={errorFields?.message}
                    onChange={(e) => setRegisterInfo({ ...registerInfo, confirmPassword: e.target.value })}
                    radius={"full"} type="password" placeholder="Entrez votre mot de passe" />
            </div>


            <div className="flex items-center font-extralight  justify-between mb-4">
                <Checkbox title='Se souvenir' >“J’accepte les
                    <span className="text-sm font-normal mx-1">
                        CGU
                    </span>

                    et la
                    <span className="text-sm font-normal ml-1">
                        Politique de confidentialité
                    </span>

                </Checkbox>

            </div>

            <Button type='button'
                isLoading={isLoading}
                onPress={handleSubmit}
                radius='full'
                disabled={isLoading}
                className={clsx({
                    "cursor-wait": isLoading
                }, "w-full bg-red-500 hover:bg-red-600 text-white")} >Connexion</Button>

            <p className="text-center mt-4 font-light text-sm">
                Vous avez déjà un compte? <Link href="/auth" className="text-red-500 underline">Connectez-vous</Link>
            </p>
        </div>
    );
}


