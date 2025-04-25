/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { authSevices } from '@/services/auth/authServices';
import { InputErrorStore } from '@/stores/input.error.store';
import { passwordValidator } from '@/utils/validator/auth.validator';
import { Button, Input } from '@heroui/react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {

    const [passwordInfo, setPasswordInfo] = useState({
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    // const [token, settoken] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const errorFields = InputErrorStore((state: any) => state.errorField);
    const setMessageError = InputErrorStore((state: any) => state.setMessageError);

    const params = useSearchParams();
    const token = params.get("token");
    const router = useRouter()

    if (!token) {
        router.push("/auth")
    }

    const handleSubmit = async () => {

        try {

            const { valid, errorData } = passwordValidator(passwordInfo)
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

                authSevices.resetPassword({
                    password: passwordInfo.password,
                    token: token || ""
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
                        router.push('/auth')

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

    if (passwordInfo.password.length < 4) {
        errors.push("le mot de passe doit contenir au moins 4 caractères");
    }
    if ((passwordInfo.password.match(/[A-Z]/g) || []).length < 1) {
        errors.push("Le mot de passe doit contenir au moins 1 lettre majuscule");
    }
    if ((passwordInfo.password.match(/[^a-z]/gi) || []).length < 1) {
        errors.push("Le mot de passe doit contenir au moins 1 symbole");
    }


    return (
        <Suspense fallback={<>Chargement</>} >
            <div className='py-10'>
                <div className=" flex justify-center items-center">

                    <Link href="/">

                        <Image alt='dd' src={'/img/auth-logo.png'} width={120} height={60} />
                    </Link>

                </div>
                <div className="text-center mb-6">
                    <h2 className="text-base font-semibold">Mot de pasee oublié</h2>
                    <p className="text-gray-500 text-xs font-light">
                        Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe
                    </p>
                </div>

                <div className="space-y-2">
                    <div className="mb-1 space-y-0.5">
                        <label className="block text-sm font-medium">Mot de passe</label>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            endContent={showPassword ?
                                <EyeOff className='cursor-pointer text-primary'
                                    size={20} onClick={() => setShowPassword(!showPassword)} /> :
                                <Eye size={20} className='text-primary cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                            fullWidth
                            value={passwordInfo?.password}
                            isInvalid={errorFields.field === 'password'}
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
                            placeholder="Confirmez votre mot de passe"
                            onChange={(e) => setPasswordInfo({ ...passwordInfo, password: e.target.value })}
                        />

                    </div>

                    <div className="mb-1 space-y-0.5">
                        <label className="block text-sm font-medium">Confirmer le mot de passe</label>
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
                            placeholder="Confirmez votre mot de passe"
                            onChange={(e) => setPasswordInfo({ ...passwordInfo, confirmPassword: e.target.value })}
                        />

                    </div>

                </div>

                <div className="mt-3">
                    <Button
                        onPress={handleSubmit}
                        isLoading={isLoading}
                        radius='full'
                        className="w-full bg-red-500 hover:bg-red-600 text-white">Envoyer</Button>
                </div>


                <p className="text-center mt-4 text-sm">
                    Se connecter avec son mot de passe <Link href="/auth" className="text-red-500 underline">Se connecter</Link>
                </p>
            </div>
        </Suspense>

    );
}

export default Page;
