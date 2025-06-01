import { useScopedI18n } from '@/locales/client';
import React from 'react';

export const EmptyDateComponent = () => {
    const loaderT = useScopedI18n("loader");
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="relative flex flex-col items-center">
                    <p className="mt-5 text-lg font-semibold">
                        {loaderT("emptyMessage")}
                    </p>
                </div>
            </div>
        </div>
    );
}
