/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { UsersServices } from "@/services/users/users.service";
import { LoadingComponent } from "@/components/loading.component";


const AppContext = createContext<any>({});


export const UserAuthWrapper = ({ children }: { children: React.ReactNode }) => {

    const [isAuth, setIsAuth] = useState({
        token: null,
        lastName: null,
        firstName: null,
        role: null,
        permissions: null,
        phone: null,
        email: null,
        image: null
    })

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchClientData = async () => {
            const token = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');

            const userServices = new UsersServices(token || "");

            try {

                userServices.userInfo().then(
                    (res) => {
                        const { status, data } = res;
                        if (data?.role === "USER") {
                            
                            setIsAuth({ ...data })
                            setIsLoading(false)

                        }
                        else if (status === 302) {
                            const userService = new UsersServices(refreshToken || "");
                            userService.refreshToken().then(
                                (response) => {

                                    const { data: refreshData } = response;
                                    localStorage.setItem("accessToken", refreshData?.accessToken);
                                    localStorage.setItem("refreshToken", refreshData?.refreshToken);
                                    if (refreshData?.user?.role === "USER") {
                                       
                                        setIsAuth({ ...refreshData })
                                        setIsLoading(false)
                                    }
                                },
                                (error) => {
                                    console.log(error)
                                    router.push('/auth')
                                    setIsLoading(false)
                                }
                            )
                        } else {
                            router.push('/auth')
                            setIsLoading(false)
                        }
                    },
                    (error) => {
                        console.log(error)
                        router.push('/auth')
                        setIsLoading(false)
                    }
                )
            }
            catch (error) {
                console.log(error)
                router.push('/auth')
            }
        }

        fetchClientData()
    }, [])



    return (
        <AppContext.Provider value={{ isAuth, setIsAuth }}>
            {isLoading ? (
                <>
                    <LoadingComponent />
                </>
            ) : (<>
                {children}
            </>
            )
            }

        </AppContext.Provider>
    )
}

export const useAppContext = () => {

    return useContext(AppContext)
}


