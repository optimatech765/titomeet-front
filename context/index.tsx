/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { usersServices } from "@/services/users/users.service";
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

            try {

                usersServices.userInfo().then(
                    (res) => {
                        const { status, data } = res;

                        console.log(data.role)
                        if ( data?.role === "USER") {

                            setIsLoading(false)
                            setIsAuth({ ...data })

                        }
                        else if (status === 302) {
                            usersServices.refreshToken().then(
                                (response) => {
                                    const { data: refreshData } = response;
                                    if (refreshData?.role === "USER") {

                                        setIsLoading(false)
                                        setIsAuth({ ...refreshData })
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


