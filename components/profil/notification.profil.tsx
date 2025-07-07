import { useScopedI18n } from '@/locales/client';
import { Button } from '@heroui/button';
import { cn, Switch } from '@heroui/react';
import React from 'react';

const NotificationProfil = () => {
     const updateProfilT = useScopedI18n("updateProfil");
     const buttonT = useScopedI18n("button");
    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <h2 className="text-2xl font-semibold mb-4">{updateProfilT("notiticationTitle")}</h2>
                <div className='space-y-6'>
                    <Switch

                        color="success"
                        classNames={{
                            base: cn(
                                "inline-flex  max-w-5xl gap-3 w-full flex-row-reverse w-full  justify-between  items-center",

                            ),
                            label: "w-full font-semibold",
                        }}>{updateProfilT("notiticatioActivation")}
                    </Switch>

                    <Switch

                        color="success"
                        classNames={{
                            base: cn(
                                "inline-flex  max-w-5xl gap-3 w-full flex-row-reverse w-full  justify-between  items-center",

                            ),
                            label: "w-full font-semibold",
                        }}>
                           {updateProfilT("notiticatioRemainber")}
                    </Switch>

                    <Switch

                        color="success"
                        classNames={{
                            base: cn(
                                "inline-flex  max-w-5xl gap-3 w-full flex-row-reverse w-full  justify-between  items-center",

                            ),
                            label: "w-full font-semibold",
                        }}>
                            {updateProfilT("notiticatioAlert")}
                    </Switch>
                </div>
            </div>

            {/* Bouton sauvegarder */}
            <div className="mt-6">
                <Button name="Sauvegarder" className="bg-red-500 text-white px-6 py-2" radius='full' >
                   {buttonT("save")}
                </Button>
            </div>
        </div>
    );
}

export default NotificationProfil;
