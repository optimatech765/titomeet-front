/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { AdvancedSettingsProfil } from '@/components/profil/advanced.settings.profil';
import { InteretProfileComponent } from '@/components/profil/interet.profile.component';
import NotificationProfil from '@/components/profil/notification.profil';
import { PaiementProfile } from '@/components/profil/paiement.profile';
import { PersonnalInfoComponent } from '@/components/profil/personnal.info.component';
import { SecurityProfil } from '@/components/profil/security.profil';
import { useAppContext } from '@/context';
import { Button, Card, Divider, User } from '@heroui/react';
import clsx from 'clsx';
import { Bell, CreditCard, LayoutDashboard, Lock, LogOut, Settings, User2 } from 'lucide-react';
import React, { useState } from 'react';

const Page = () => {

    const [activeMenu, setActiveMenu] = useState("informations");
    const { isAuth } = useAppContext();

    return (
        <div className='h-screen section-container py-6'>
            <Card className='h-full'>
                <div className='flex  h-full'>
                    <div className={"border-r border-slate-300 w-1/5 px-2 py-4 flex flex-col "}>
                        <div className=''>
                            <User
                                avatarProps={{
                                    src: "/img/user.png",
                                }}
                                description={isAuth?.username}
                                name={`` + isAuth?.firstName + " " + isAuth?.lastName}
                            />
                            <Divider className='mt-2' />
                        </div>
                        <div className='flex flex-col flex-1 justify-between'>
                            <div className="mt-6 space-y-2">
                                <h3 className='font-bold text-sm'>Paramètre</h3>
                                <Button
                                    variant="light"
                                    onPress={() => setActiveMenu("informations")}
                                    className={clsx({
                                        "bg-secondary-blue text-white": activeMenu === "informations",
                                    }, "w-full flex items-center gap-2  justify-start ")}>
                                    <User2 className="w-4 h-4" />
                                    Informations personnelles
                                </Button>

                                <Button
                                    onPress={() => setActiveMenu("interet")}
                                    className={clsx({
                                        "bg-secondary-blue text-white": activeMenu === "interet",
                                    }, "w-full flex items-center gap-2  justify-start ")}
                                    variant="light">
                                    <LayoutDashboard className="w-4 h-4 " /> Mes centres d&apos;intérêt
                                </Button>

                                <Button onPress={() => setActiveMenu("notifications")} className={clsx({
                                    "bg-secondary-blue text-white": activeMenu === "notifications",
                                }, "w-full flex items-center gap-2  justify-start ")} variant="light">
                                    <Bell className="w-4 h-4 " /> Notifications
                                </Button>

                                <Button onPress={() => setActiveMenu("security")} className={clsx({
                                    "bg-secondary-blue text-white": activeMenu === "security",
                                }, "w-full flex items-center gap-2  justify-start ")} variant="light">
                                    <Lock className="w-4 h-4 " /> Sécurité du compte
                                </Button>

                                <Button onPress={() => setActiveMenu("paiement")} className={clsx({
                                    "bg-secondary-blue text-white": activeMenu === "paiement",
                                }, "w-full flex items-center gap-2  justify-start ")} variant="light">
                                    <CreditCard className="w-4 h-4 " /> Paiements
                                </Button>

                                <Button onPress={() => setActiveMenu("advanced")} className={clsx({
                                    "bg-secondary-blue text-white": activeMenu === "advanced",
                                }, "w-full flex items-center gap-2  justify-start ")} variant="light">
                                    <Settings className="w-4 h-4" /> Paramètres avancés
                                </Button>
                            </div>
                            <Button className="w-full flex items-center gap-2 justify-start text-white bg-primary " >
                                <LogOut className="w-4 h-4 " /> Déconnexion
                            </Button>
                        </div>

                    </div>
                    <div className='w-4/5 p-3 '>
                        {activeMenu === "informations" && <PersonnalInfoComponent />}
                        {activeMenu === "interet" && <InteretProfileComponent />}
                        {activeMenu === "notifications" && <NotificationProfil />}
                        {activeMenu === "security" && <SecurityProfil />}
                        {activeMenu === "advanced" && <AdvancedSettingsProfil />}
                        {activeMenu === "paiement" && <PaiementProfile />}
                    </div>
                </div>

            </Card >

        </div >
    );
}

export default Page;
