"use client";

import Image from "next/image";

export const PartenairesSection = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-orange-200 text-center">
            <div className="space-y-1">
                
                <h2 className="text-3xl font-bold text-black">Nos partenaires</h2>

                <p className="text-gray-600 relative inline-block mt-2">
                    Un réseau de partenaires pour des événements sans limites
                </p>
                <div className="bg-primary h-2 max-w-36 mt-1 rounded-tl-md mx-auto" />
            </div>

            <div className="mt-8 flex justify-between items-center gap-8 flex-wrap px-10">
                <Image src="/img/gozem.png" alt="Gozem" width={154} height={60} className="w-44" />
                <Image src="/img/celtiis.jpg" alt="Celtiis" width={154} height={60} className={"w-44 rounded-lg"} />
                <Image src="/img/gozem.png" alt="Gozem" width={154} height={60} className="w-44" />
                <Image src="/img/celtiis.jpg" alt="Celtiis" width={154} height={60} className={"w-44 rounded-lg"} />
            </div>
        </section>
    );
};
