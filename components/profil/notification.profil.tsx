import { Button } from '@heroui/button';
import { cn, Switch } from '@heroui/react';
import React from 'react';

const NotificationProfil = () => {
    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
                <div className='space-y-6'>
                    <Switch

                        color="success"
                        classNames={{
                            base: cn(
                                "inline-flex  max-w-5xl gap-3 w-full flex-row-reverse w-full  justify-between  items-center",

                            ),
                            label: "w-full font-semibold",
                        }}>Activation
                    </Switch>

                    <Switch

                        color="success"
                        classNames={{
                            base: cn(
                                "inline-flex  max-w-5xl gap-3 w-full flex-row-reverse w-full  justify-between  items-center",

                            ),
                            label: "w-full font-semibold",
                        }}>
                           Rappel des évènements 1h à l’avance
                    </Switch>

                    <Switch

                        color="success"
                        classNames={{
                            base: cn(
                                "inline-flex  max-w-5xl gap-3 w-full flex-row-reverse w-full  justify-between  items-center",

                            ),
                            label: "w-full font-semibold",
                        }}>
                            Alerte pour nouveaux messages
                    </Switch>
                </div>
            </div>

            {/* Bouton sauvegarder */}
            <div className="mt-6">
                <Button className="bg-red-500 text-white px-6 py-2" radius='full' >
                    Sauvegarder
                </Button>
            </div>
        </div>
    );
}

export default NotificationProfil;
