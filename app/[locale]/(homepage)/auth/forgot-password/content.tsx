/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useScopedI18n } from '@/locales/client';
import { authSevices } from '@/services/auth/authServices';
import { InputErrorStore } from '@/stores/input.error.store';
import { emailValidator } from '@/utils/validator/auth.validator';
import { Button, Input } from '@heroui/react';
import { CheckCircleIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const ForgotPasswordContent = () => {

    const [email, setEmail] = useState("");
    const [sendingEmail, setSendingEmail] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const errorFields = InputErrorStore((state: any) => state.errorField);
    const setMessageError = InputErrorStore((state: any) => state.setMessageError);
    const forgotPasswordT = useScopedI18n("forgotPassword");
    const resetPasswordT = useScopedI18n("resetPassword");
    const inputT = useScopedI18n("input");
    const buttonT = useScopedI18n("button");
    const loginT = useScopedI18n("login");

    const handleSubmit = async () => {

        try {

            const { valid, errorData } = emailValidator(email)
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

                authSevices.forgotPassword(email).then(
                    (response) => {

                        toast.update(toastsId, {
                            render: response?.data?.message,
                            type: "success",
                            isLoading: false,
                            autoClose: 1000,
                        });

                        setSendingEmail(true)
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
                setMessageError({ ...errorData, field: "email" })
                toast.error(errorData?.message)
            }

        } catch (error: unknown) {
            console.log(error)
            toast.error("Une erreur lors de la demande")
        }

    }

    return (
        <div className='py-10'>
            <div className=" flex justify-center items-center">

                <Link href="/">

                    <Image alt='dd' src={'/img/auth-logo.png'} width={120} height={60} />
                </Link>

            </div>
            {sendingEmail ? <>
                <div className="text-center mt-6 shadow-lg p-4 rounded-lg">
                    <div className="flex tems-center justify-center">
                        <CheckCircleIcon className="h-14 w-14 text-secondary-blue" />
                    </div>

                    <p>
                        {forgotPasswordT("title")}
                    </p>
                </div>

            </> : <>
                <div className="text-center mb-6">
                    <h2 className="text-base font-semibold">{resetPasswordT("title")}</h2>
                    <p className="text-gray-500 text-xs font-light">
                        {forgotPasswordT("subTitle")}
                    </p>
                </div>

                <div className="mb-2 space-y-0.5">
                    <label className="block text-sm font-medium">{inputT("emailLabel")}</label>
                    <Input
                        isInvalid={errorFields.field === "email"}
                        errorMessage={errorFields?.message}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        radius={"full"}
                        type="email"
                        className='rounded-full'
                        placeholder={inputT("emailPlaceholder")}
                    />
                </div>
                <Button
                    name={"Confirm"}
                    onPress={handleSubmit}
                    isLoading={isLoading}
                    radius='full'
                    className="w-full bg-red-500 hover:bg-red-600 text-white">
                    {buttonT("confirm")}
                </Button>

                <p className="text-center mt-4 text-sm">
                    {loginT("withEmail")} <Link href="/auth" className="text-red-500 underline">{buttonT("login")}</Link>
                </p>
            </>}




        </div>
    );
}
