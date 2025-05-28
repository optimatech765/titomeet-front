"use client";

import { useScopedI18n } from "@/locales/client";
import Image from "next/image";

export const PartenairesSection = () => {
    const partnerT = useScopedI18n('partner');
    return (
        <section className=" bg-white text-center">
            {/* bg-gradient-to-b from-white to-orange-200 */}
            <div className="space-y-1">
                
                <h2 className="text-xl md:text-4xl font-bold text-primary">{partnerT("title")}</h2>

                <p className="text-gray-600 relative inline-block mt-2">
                   {partnerT("description")}
                </p>
                <div className="bg-secondary h-2 max-w-36 mt-1 rounded-tl-md mx-auto" />
            </div>

            <div className="mt-8 flex justify-center items-center gap-8 flex-wrap section-container">
                <Image src="/img/partner2.png" alt="SION MARK" width={154} height={60} className="w-44" />
                <Image src="/img/partner1.jpg" alt="Afrika consulting" width={154} height={60} className={"w-44 rounded-lg"} />
               
            </div>
        </section>
    );
};
