/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { authSevices } from '@/services/auth/authServices';
import { useAuthStore } from '@/stores/auth';
import { InputErrorStore } from '@/stores/input.error.store';
import { LoginDto } from '@/utils/dto/auth.dto';
import { authValidator } from '@/utils/validator/auth.validator';
import { Button, Checkbox, Input } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const Loginpage = () => {
    const [loginInfo, setLoginInfo] = useState<LoginDto>({
        email: '',
        password: '',
    })
    const errorFields = InputErrorStore((state: any) => state.errorField);
    const setMessageError = InputErrorStore((state: any) => state.setMessageError);
    const { setToken, setRefreshToken } = useAuthStore();
    const router = useRouter()




    const handleSubmit = async () => {

        try {

            const { valid, errorData } = authValidator(loginInfo)
            if (valid) {

                // Affiche un toast au début de la requête
                const toastsId = toast.loading("Connexion...", {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                authSevices.login(loginInfo).then(
                    (response) => {

                        toast.update(toastsId, {
                            render: response?.data?.message,
                            type: "success",
                            isLoading: false,
                            autoClose: 1000,
                        });
                        localStorage.setItem("accessToken", response?.data?.accessToken);
                        setToken(response?.data?.accessToken);
                        localStorage.setItem("refreshToken", response?.data?.refreshToken);
                        setRefreshToken(response?.data?.refreshToken);
                        router.push('/user')

                    },
                    (error) => {

                        toast.update(toastsId, {
                            render: error?.response?.data?.message,
                            type: "error",
                            isLoading: false,
                            autoClose: 1000,
                        });

                        console.log(error)
                    })

            } else {
                setMessageError(errorData)
            }

        } catch (error: unknown) {
            console.log(error)

        }

    }

    useEffect(() => {
        const { errorData } = authValidator(loginInfo);
        setMessageError(errorData);
    }, [loginInfo]);


    return (
        <div className='py-10 flex-1'>
            <div className=" flex justify-center items-center">

                <Image alt='dd' src={'/img/auth-logo.png'} width={120} height={60} />

            </div>
            <div className="text-center mb-6">
                <h2 className="text-base font-semibold">Connectez vous à votre compte</h2>
                <p className="text-gray-500 text-xs font-light">Sélectionnez votre méthode de connexion</p>
            </div>

            <div className="flex gap-4 justify-center mb-1">
                <Button variant="flat" className="flex items-center gap-1 flex-1 h-9">
                    <Image alt='dd' src={'/img/google.png'} width={120} height={70} className='h-5 w-6' /> Google
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
                <label className="block text-sm font-medium">Email</label>
                <Input
                    fullWidth
                    value={loginInfo?.email}
                    isInvalid={errorFields.field === 'email'}
                    name="email"
                    isRequired
                    errorMessage={errorFields?.message}
                    radius={"full"}
                    type="email"
                    className='rounded-full'
                    placeholder="Entrez votre adresse email"
                    onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
                />
            </div>
            <div className="mb-1 space-y-0.5">
                <label className="block text-sm font-medium">Mot de passe</label>
                <Input
                    fullWidth
                    value={loginInfo?.password}
                    isInvalid={errorFields.field === 'password'}
                    name="password"
                    isRequired
                    errorMessage={errorFields?.message}
                    radius={"full"}
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                />
            </div>

            <div className="flex items-center justify-between mb-4">
                <Checkbox title='Se souvenir' >Se souvenir</Checkbox>
                <Link href="/auth/forgot-password" className="text-sm text-red-500 hover:underline">Mot de passe oublié?</Link>
            </div>

            <Button
                type="button"
                onPress={handleSubmit}
                radius='full'
                className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
                Connexion
            </Button>


            <p className="text-center mt-4 text-sm font-light">
                Vous n&apos;avez pas de compte? <Link href="/auth/register" className="text-red-500 underline">Inscrivez-vous</Link>
            </p>
        </div>
    );
}






