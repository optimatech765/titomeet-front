'use client';

import Image from 'next/image';
import { Button } from '@heroui/button';
import { useScopedI18n } from '@/locales/client';

export const BecomeProviderSection = () => {
  const prestataireT = useScopedI18n('prestataire');

  const lineListe = [
    { id: 1, name: prestataireT('line1') },
    { id: 2, name: prestataireT('line2') },
    { id: 3, name: prestataireT('line3') },
    { id: 4, name: prestataireT('line4') },
  ];

  return (
    <section className="bg-white from-[#fff1f1] to-white py-10 section-container flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Images */}
      <div className="relative flex-1 flex justify-center items-center gap-4 flex-wrap max-w-2xl">

        <div className=" w-full md:w-5/6 h-48 relative rounded-md overflow-hidden shadow-lg">
          <Image src="/img/buffet2.jpg" alt="Service 2" fill className="object-cover" />
        </div>
        <div className="w-40 h-24 absolute -bottom-5 right-0  rounded-md overflow-hidden shadow-lg">
          <Image src="/img/buffet3.jpg" alt="Service 3" fill className="object-cover" />
        </div>
        <div className="w-40 h-24 absolute -top-14 left-0 rounded-md overflow-hidden shadow-lg">
          <Image src="/img/buffet1.jpg" alt="Service 1" fill className="object-cover" />
        </div>
      </div>

      {/* Texte */}
      <div className="flex-1 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{prestataireT("title")}  <span className="text-red-600 block">TITOMEET</span></h2>
        <p className="text-gray-600 mb-6">
          {prestataireT("description")}
        </p>
        <ul className="space-y-3 mb-6">
          {lineListe.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-700 gap-2">
              <div className="bg-secondary text-4xl w-3 h-3 rounded-full " />
              {feature.name}
            </li>
          ))}
        </ul>
        <Button className="bg-red-500 rounded-full  hover:bg-red-600 text-white text-sm font-semibold py-2 px-4  transition duration-200">
          {prestataireT("cta")}
        </Button>
      </div>
    </section>
  );
};
