import { useScopedI18n } from '@/locales/client';
import React from 'react';

export const EmptyDateComponent = () => {
    const loarderT = useScopedI18n("loarder");
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                    <p className="mt-5 text-white text-lg font-semibold">
                        {loarderT("emptyMessage")}
                    </p>
                </div>
            </div>
        </div>
    );
}
