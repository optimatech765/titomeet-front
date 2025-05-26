import { Avatar, Button, Input } from '@heroui/react';
import { CameraIcon } from 'lucide-react';
import React, { useEffect } from 'react';
import { InputContainerComponentTop } from '../create-event/input.container.component';
import { useUserInfoStore } from '@/stores/userinfo.store';
import { useAppContext } from '@/context';
import { useScopedI18n } from '@/locales/client';

export const PersonnalInfoComponent = () => {
    const { isAuth } = useAppContext();
    const profilT = useScopedI18n('profil');
    const personalInfoT = useScopedI18n('personalInfo');
    const buttonT = useScopedI18n('button');
    const { setUserInfo, userInfo, updateUserInfo, handleUpdateUser, isLoading } = useUserInfoStore();

    useEffect(() => {
        setUserInfo(isAuth);
    }, []);

    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <h2 className="text-2xl font-semibold mb-4">{profilT('personalInfo')}</h2>

                <div className='flex flex-col md:flex-row justify-between '>
                    {/* Photo de profil */}
                    <div className="flex items-center space-x-6">
                        <div className="relative w-24 h-36 space-y-1.5 mx-auto ">
                            <label className='text-sm font-medium text-gray-700'>{personalInfoT("picture")}</label>

                            <Avatar
                                src="/img/user.png"
                                className=" w-28 h-28"
                            />
                            <button className="absolute -bottom-3 -right-1 bg-red-500 text-white p-1 rounded-full">
                                <CameraIcon size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="grid md:grid-cols-2 gap-4 mt-6 flex-1 px-3 md:px-10">

                        <InputContainerComponentTop title={personalInfoT('lastName')} >
                            <Input className="w-full" value={userInfo?.lastName} onChange={(e) => updateUserInfo("lastName", e.target.value)} />
                        </InputContainerComponentTop>
                        <InputContainerComponentTop title={personalInfoT('firstName')} >
                            <Input className="w-full" value={userInfo?.firstName} onChange={(e) => updateUserInfo("firstName", e.target.value)} />
                        </InputContainerComponentTop>

                        <InputContainerComponentTop title={personalInfoT('userName')} >
                            <Input className="w-full" value={userInfo?.username} onChange={(e) => updateUserInfo("username", e.target.value)} />
                        </InputContainerComponentTop>

                        <InputContainerComponentTop title={personalInfoT('email')} >
                            <Input className="w-full" value={userInfo?.email} onChange={(e) => updateUserInfo("email", e.target.value)} />
                        </InputContainerComponentTop>

                        <InputContainerComponentTop title={personalInfoT("location")} >
                            <Input className="w-full" />
                        </InputContainerComponentTop>

                    </div>

                </div>
            </div>


            {/* Bouton sauvegarder */}
            <div className="mt-6">
                <Button isLoading={isLoading} className="bg-red-500 text-white px-6 py-2" radius='full' onPress={() => handleUpdateUser(userInfo)} >
                    {buttonT('save')}
                </Button>
            </div>
        </div>
    );
}

