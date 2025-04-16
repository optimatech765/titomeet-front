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
import { Bell, CreditCard, LayoutDashboard, Lock, LogOut, Menu, Settings, User2, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Page = () => {

    const [activeMenu, setActiveMenu] = useState("informations");
    const { isAuth } = useAppContext();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    useEffect(() => {
        setSidebarOpen(false)
    }, [activeMenu]);

    return (
        // <div className='h-screen section-container py-6'>
        //     <Card className='h-full'>
        //         <div className='flex  h-full'>
        //             <div className={"border-r border-slate-300 w-1/5 px-2 py-4 flex flex-col "}>
        //                 <div className=''>
        //                     <User
        //                         avatarProps={{
        //                             src: "/img/user.png",
        //                         }}
        //                         description={isAuth?.username}
        //                         name={`` + isAuth?.firstName + " " + isAuth?.lastName}
        //                     />
        //                     <Divider className='mt-2' />
        //                 </div>
        //                 <div className='flex flex-col flex-1 justify-between'>
        //                     <div className="mt-6 space-y-2">
        //                         <h3 className='font-bold text-sm'>Paramètre</h3>
        //                         <Button
        //                             variant="light"
        //                             onPress={() => setActiveMenu("informations")}
        //                             className={clsx({
        //                                 "bg-secondary-blue text-white": activeMenu === "informations",
        //                             }, "w-full flex items-center gap-2  justify-start ")}>
        //                             <User2 className="w-4 h-4" />
        //                             Informations personnelles
        //                         </Button>

        //                         <Button
        //                             onPress={() => setActiveMenu("interet")}
        //                             className={clsx({
        //                                 "bg-secondary-blue text-white": activeMenu === "interet",
        //                             }, "w-full flex items-center gap-2  justify-start ")}
        //                             variant="light">
        //                             <LayoutDashboard className="w-4 h-4 " /> Mes centres d&apos;intérêt
        //                         </Button>

        //                         <Button onPress={() => setActiveMenu("notifications")} className={clsx({
        //                             "bg-secondary-blue text-white": activeMenu === "notifications",
        //                         }, "w-full flex items-center gap-2  justify-start ")} variant="light">
        //                             <Bell className="w-4 h-4 " /> Notifications
        //                         </Button>

        //                         <Button onPress={() => setActiveMenu("security")} className={clsx({
        //                             "bg-secondary-blue text-white": activeMenu === "security",
        //                         }, "w-full flex items-center gap-2  justify-start ")} variant="light">
        //                             <Lock className="w-4 h-4 " /> Sécurité du compte
        //                         </Button>

        //                         <Button onPress={() => setActiveMenu("paiement")} className={clsx({
        //                             "bg-secondary-blue text-white": activeMenu === "paiement",
        //                         }, "w-full flex items-center gap-2  justify-start ")} variant="light">
        //                             <CreditCard className="w-4 h-4 " /> Paiements
        //                         </Button>

        //                         <Button onPress={() => setActiveMenu("advanced")} className={clsx({
        //                             "bg-secondary-blue text-white": activeMenu === "advanced",
        //                         }, "w-full flex items-center gap-2  justify-start ")} variant="light">
        //                             <Settings className="w-4 h-4" /> Paramètres avancés
        //                         </Button>
        //                     </div>
        //                     <Button className="w-full flex items-center gap-2 justify-start text-white bg-primary " >
        //                         <LogOut className="w-4 h-4 " /> Déconnexion
        //                     </Button>
        //                 </div>

        //             </div>
        //             <div className='w-4/5 p-3 '>
        //                 {activeMenu === "informations" && <PersonnalInfoComponent />}
        //                 {activeMenu === "interet" && <InteretProfileComponent />}
        //                 {activeMenu === "notifications" && <NotificationProfil />}
        //                 {activeMenu === "security" && <SecurityProfil />}
        //                 {activeMenu === "advanced" && <AdvancedSettingsProfil />}
        //                 {activeMenu === "paiement" && <PaiementProfile />}
        //             </div>
        //         </div>

        //     </Card >

        // </div >
        <div className="min-h-screen section-container py-6 relative">
            {/* Burger menu on mobile */}
            <div className="lg:hidden flex justify-between items-center px-4 mb-2">
                <h2 className="text-lg font-semibold">Mon Profil</h2>
                <button onClick={toggleSidebar}>
                    {sidebarOpen ? <X size={28} className='text-primary' /> : <Menu size={28} className='text-primary' />}
                </button>
            </div>

            {/* Overlay sidebar on mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden" onClick={toggleSidebar}></div>
            )}
            <Card className='h-full'>
                <div className='flex  h-full'>
                    {/* Sidebar */}
                    <div
                        className={clsx(
                            "bg-white z-50 lg:static fixed top-0 left-0 h-full w-4/5 max-w-xs px-4 py-4 shadow-lg border-r border-slate-300 flex flex-col transition-transform duration-300",
                            {
                                "-translate-x-full": !sidebarOpen,
                                "translate-x-0": sidebarOpen,
                                "lg:translate-x-0 lg:flex": true,
                            }
                        )}
                    >
                        {/* Replace with your user data */}
                        <div>
                            <div className="mb-4">
                                <User
                                    avatarProps={{
                                        src: "/img/user.png",
                                    }}
                                    description={isAuth?.username}
                                    name={`` + isAuth?.firstName + " " + isAuth?.lastName}
                                />
                                <Divider className='mt-2' />

                            </div>
                        </div>

                        {/* Menu */}
                        <div className="flex flex-col gap-2 flex-1">
                            <SidebarButton label="Informations personnelles" active={activeMenu === "informations"} onClick={() => setActiveMenu("informations")} icon={<User2 className="w-4 h-4" />} />
                            <SidebarButton label="Mes centres d’intérêt" active={activeMenu === "interet"} onClick={() => setActiveMenu("interet")} icon={<LayoutDashboard className="w-4 h-4" />} />
                            <SidebarButton label="Notifications" active={activeMenu === "notifications"} onClick={() => setActiveMenu("notifications")} icon={<Bell className="w-4 h-4" />} />
                            <SidebarButton label="Sécurité du compte" active={activeMenu === "security"} onClick={() => setActiveMenu("security")} icon={<Lock className="w-4 h-4" />} />
                            <SidebarButton label="Paiements" active={activeMenu === "paiement"} onClick={() => setActiveMenu("paiement")} icon={<CreditCard className="w-4 h-4" />} />
                            <SidebarButton label="Paramètres avancés" active={activeMenu === "advanced"} onClick={() => setActiveMenu("advanced")} icon={<Settings className="w-4 h-4" />} />
                        </div>

                        <button className="mt-4 bg-primary text-white px-4 py-2 flex items-center gap-2 w-full">
                            <LogOut className="w-4 h-4" /> Déconnexion
                        </button>
                    </div>

                    {/* Content */}
                    <div className=" lg:w-[80%] p-4">
                        {activeMenu === "informations" && <PersonnalInfoComponent />}
                        {activeMenu === "interet" && <InteretProfileComponent />}
                        {activeMenu === "notifications" && <NotificationProfil />}
                        {activeMenu === "security" && <SecurityProfil />}
                        {activeMenu === "advanced" && <AdvancedSettingsProfil />}
                        {activeMenu === "paiement" && <PaiementProfile />}
                    </div>
                </div>
            </Card>

        </div>

    );
}

export default Page;


function SidebarButton({ label, active, onClick, icon }: { label: string, active: boolean, onClick: () => void, icon: React.ReactNode }) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "flex items-center gap-2 px-3 py-2 rounded text-left",
                active ? "bg-secondary-blue text-white" : "hover:bg-slate-100 text-gray-800"
            )}
        >
            {icon}
            <span className="text-sm">{label}</span>
        </button>
    );
}
