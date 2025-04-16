/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { authSevices } from '@/services/auth/authServices';
import { useAuthStore } from '@/stores/auth';
import { InputErrorStore } from '@/stores/input.error.store';
import { LoginDto } from '@/utils/dto/auth.dto';
import { authValidator } from '@/utils/validator/auth.validator';
import { Button, Checkbox, Input } from '@heroui/react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const Loginpage = () => {
    const [loginInfo, setLoginInfo] = useState<LoginDto>({
        email: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false);
    const errorFields = InputErrorStore((state: any) => state.errorField);
    const setMessageError = InputErrorStore((state: any) => state.setMessageError);
    const { setToken, setRefreshToken } = useAuthStore();
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);




    const handleSubmit = async () => {

        try {

            const { valid, errorData } = authValidator(loginInfo)
            if (valid) {
                setIsLoading(true);
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
                        if (response?.data?.user?.role === 'ADMIN') {

                            router.push('/admin')

                        } else {

                            router.push('/user')
                        }

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
                setMessageError(errorData)
            }

        } catch (error: unknown) {
            console.log(error)

        }

    }

    const errors:any = [];

    if (loginInfo.password.length < 4) {
        errors.push("le mot de passe doit contenir au moins 4 caractères");
    }
    if ((loginInfo.password.match(/[A-Z]/g) || []).length < 1) {
        errors.push("Le mot de passe doit contenir au moins 1 lettre majuscule");
    }
    if ((loginInfo.password.match(/[^a-z]/gi) || []).length < 1) {
        errors.push("Le mot de passe doit contenir au moins 1 symbole");
    }


    return (
        <div className='py-10 flex-1'>
            <div className=" flex justify-center items-center">
                <Link href="/">

                    <Image alt='dd' src={'/img/auth-logo.png'} width={120} height={60} />
                </Link>

            </div>
            <div className="text-center mb-6">
                <h2 className="text-base font-semibold text-black">Connectez vous à votre compte</h2>
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
                <label className="block text-sm font-medium text-black">Email</label>
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
                <label className="block text-sm font-medium text-black">Mot de passe</label>
                <Input
                    type={showPassword ? 'text' : 'password'}
                    endContent={showPassword ? <EyeOff className='text-primary' size={20} onClick={() => setShowPassword(!showPassword)} /> : <Eye size={20} onClick={() => setShowPassword(!showPassword)} className='text-primary' />}
                    fullWidth
                    value={loginInfo?.password}
                    isInvalid={errorFields.field === 'password'}
                    name="password"
                    isRequired
                    errorMessage={() => (
                        <ul>
                          {errors.map((error:string, i:number) => (
                            <li key={i}>{error}</li>
                          ))}
                        </ul>
                      )}
                    radius={"full"}
                    placeholder="Entrez votre mot de passe"
                    onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                />
            </div>

            <div className="flex items-center justify-between mb-4 text-black">
                <Checkbox title='Se souvenir' className='text-black' >Se souvenir</Checkbox>
                <Link href="/auth/forgot-password" className="text-sm text-red-500 hover:underline">Mot de passe oublié?</Link>
            </div>

            <Button
                disabled={isLoading}
                isLoading={isLoading}
                type="button"
                onPress={handleSubmit}
                radius='full'
                className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
                Connexion
            </Button>


            <p className="text-center mt-4 text-sm font-light text-slate-500">
                Vous n&apos;avez pas de compte? <Link href="/auth/register" className="text-red-500 underline">Inscrivez-vous</Link>
            </p>
        </div>
    );
}






