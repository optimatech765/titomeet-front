/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useScopedI18n } from '@/locales/client';
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

export const ResetPasswordContent = () => {

    const [passwordInfo, setPasswordInfo] = useState({
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    // const [token, settoken] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const errorFields = InputErrorStore((state: any) => state.errorField);
    const setMessageError = InputErrorStore((state: any) => state.setMessageError);
    const passwordT = useScopedI18n("password");
    const resetPasswordT = useScopedI18n("resetPassword");
    const inputT = useScopedI18n("input");
    const buttonT = useScopedI18n("button");
    const loginT = useScopedI18n("login");


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
        <Suspense fallback={<>Chargement</>} >
            <div className='py-10'>
                <div className=" flex justify-center items-center">

                    <Link href="/">

                        <Image alt='dd' src={'/img/auth-logo.png'} width={120} height={60} />
                    </Link>

                </div>
                <div className="text-center mb-6">
                    <h2 className="text-base font-semibold">{resetPasswordT("title")}</h2>
                    <p className="text-gray-500 text-xs font-light">
                        {resetPasswordT("subTitle")}
                    </p>
                </div>

                <div className="space-y-2">
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
                        name={"Confirm"}
                        onPress={handleSubmit}
                        isLoading={isLoading}
                        radius='full'
                        className="w-full bg-red-500 hover:bg-red-600 text-white">
                        {buttonT("confirm")}
                    </Button>
                </div>


                <p className="text-center mt-4 text-sm">
                    {loginT("withEmail")} <Link href="/auth" className="text-red-500 underline">{buttonT("login")}</Link>
                </p>
            </div>
        </Suspense>

    );
}
