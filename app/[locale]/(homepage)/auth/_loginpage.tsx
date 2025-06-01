/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useScopedI18n } from '@/locales/client';
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
    const buttonT = useScopedI18n("button");
    const inputT = useScopedI18n("input");
    const loginT = useScopedI18n("login");




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

    const errors: any = [];

    if (loginInfo.password.length < 8) {
        errors.push("le mot de passe doit contenir au moins 8 caractères");
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
                <h2 className="text-base font-semibold text-black">{loginT("title")}</h2>
                <p className="text-gray-500 text-xs font-light">{loginT("selectMethod")}</p>
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
                <span className="mx-4 text-gray-400">{loginT("connectWith")}</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="mb-2 space-y-0.5">
                <label className="block text-sm font-medium text-black">{inputT("emailLabel")}</label>
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
                    placeholder={inputT("emailPlaceholder")}
                    onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
                />
            </div>
            
            <div className="mb-1 space-y-0.5">
                <label className="block text-sm font-medium text-black">{inputT("passwordLabel")}</label>
                <Input
                    type={showPassword ? 'text' : 'password'}
                    endContent={showPassword ? <EyeOff className='text-primary cursor-pointer' size={20} onClick={() => setShowPassword(!showPassword)} /> :
                        <Eye size={20} onClick={() => setShowPassword(!showPassword)} className='text-primary cursor-pointer' />}
                    fullWidth
                    value={loginInfo?.password}
                    isInvalid={errorFields.field === 'password'}
                    name="password"
                    isRequired
                    errorMessage={errorFields?.message}
                    radius={"full"}
                    placeholder={inputT("passwordPlaceholder")}
                    onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                />
            </div>

            <div className="flex items-center justify-between mb-4 text-black">
                <Checkbox title={loginT("remember")} className='text-black' >{loginT("remember")}</Checkbox>
                <Link href="/auth/forgot-password" className="text-sm text-red-500 hover:underline">{loginT("forgotPass")}</Link>
            </div>

            <Button
                disabled={isLoading}
                isLoading={isLoading}
                type="button"
                onPress={handleSubmit}
                radius='full'
                className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
                {buttonT("login")}
            </Button>


            <p className="text-center mt-4 text-sm font-light text-slate-500">
                {loginT("noAccount")} <Link href="/auth/register" className="text-red-500 underline">{loginT("register")}</Link>
            </p>
        </div>
    );
}






