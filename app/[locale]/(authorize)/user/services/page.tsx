/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { AwaitDataLoader } from '@/components/await.data.loader';
import { LoadingComponent2 } from '@/components/loading.component';
import { ServiceCardComponent } from '@/components/service.card.component';
import ServicesFilterSection from '@/sections/services.filter.section';
import { useProvidersStore } from '@/stores/providers.store';
import { ProvidersResponseDto } from '@/utils/dto/providers.dto';
import { Button, Divider, Modal, ModalBody, ModalContent, useDisclosure } from '@heroui/react';
import { BriefcaseBusiness, Globe, Mail, MapPin, PhoneCall, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Page = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { fetchIsLoading, dataList, fetchProvidersList } = useProvidersStore();

    useEffect(() => {
        fetchProvidersList();
    }, []);

    return (
        <>
            {fetchIsLoading && <LoadingComponent2 />}
            {!fetchIsLoading &&
                <div className='relative min-h-screen flex flex-col gap-5 section-container pt-6 pb-12 '>


                    <section className='flex flex-wrap justify-between items-center'>
                        <h3 className='font-extrabold text-2xl z-10'>Services disponibles</h3>
                        <Button as={Link} href="/user/services/new" className='mt-2 bg-primary text-white' radius='full' >
                            Devenir prestataire
                        </Button>
                    </section>
                    <section className='z-10'>
                        <ServicesFilterSection />
                    </section>


                    <Divider />

                    <section className={"space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 "}>
                        <AwaitDataLoader emptyMessage={<span className='text-red-500'>Pas de data</span>} dataLength={dataList.length} isLoading={fetchIsLoading}>
                            <>
                                {dataList.map((item: ProvidersResponseDto, i) => (
                                    <>
                                    <div onClick={() => onOpen()} key={i} className='flex-1'>
                                        <ServiceCardComponent data={item} />
                                    </div>
                                    <div onClick={() => onOpen()} key={i+"h"} className='flex-1'>
                                        <ServiceCardComponent data={item} />
                                    </div>
                                    <div onClick={() => onOpen()} key={i+"f"} className='flex-1'>
                                        <ServiceCardComponent data={item} />
                                    </div>
                                    </>
                                ))}
                            </>
                        </AwaitDataLoader>

                    </section>

                    <Modal
                        size={"lg"}
                        classNames={{ closeButton: 'text-primary mt-3 font-bold text-2xl' }}
                        isOpen={isOpen}
                        onClose={onClose}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <div className='px-6 pt-5 mb-2'>
                                        <h3 className="text-lg font-semibold">
                                            Détails
                                        </h3>

                                    </div>
                                    <ModalBody>
                                        <div className="relative w-full h-[174px]">
                                            <Image
                                                width={200}
                                                height={200}
                                                objectFit='cover'
                                                src="/img/event-image.jpg"
                                                alt="Event Banner"
                                                className="w-full h-full object-cover rounded-xl"
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold">
                                            Nom du pretataire
                                        </h3>
                                        <div className="flex justify-between">
                                            <div className='flex-1 flex flex-col gap-2'>
                                                <p className=" font-light flex items-center gap-1">
                                                    <BriefcaseBusiness className="w-4 h-4 mr-1 text-primary" />
                                                    Décoration
                                                </p>

                                                <p className=" font-light flex items-center gap-1">
                                                    <MapPin className="w-4 h-4 mr-1 text-primary" />
                                                    COTONOU
                                                </p>
                                                <div className='flex items-center gap-2'>
                                                    (04)
                                                    <Star className={"h-3 w-3 text-secondary "} fill='#f08621' />
                                                    <Star className={"h-3 w-3 text-secondary "} fill='#f08621' />
                                                    <Star className={"h-3 w-3 text-secondary "} fill='#f08621' />
                                                    <Star className={"h-3 w-3 text-secondary "} fill='#f08621' />
                                                    <Star className={"h-3 w-3 text-slate-300"} fill='#cbd5e1' />
                                                </div>
                                            </div>
                                            <div className={"border-s border-slate-500 pl-3 flex-1 flex flex-col gap-2"}>
                                                <p className=" font-light flex items-center gap-1">
                                                    <PhoneCall className="w-4 h-4 mr-1 text-primary" />
                                                    12345678
                                                </p>

                                                <p className=" font-light flex items-center gap-1">
                                                    <Mail className="w-4 h-4 mr-1 text-primary" />
                                                    test@gmail.com
                                                </p>

                                                <p className=" font-light flex items-center gap-1">
                                                    <Globe className="w-4 h-4 mr-1 text-primary" />
                                                    test.com
                                                </p>
                                            </div>


                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                Description
                                            </h3>
                                            <p className='font-light text-base'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Est officia alias nihil accusamus a ea nobis rerum qui
                                                molestias velit.
                                            </p>
                                        </div>
                                        <div className={"flex justify-center"}>
                                            <Button radius='full' className={"bg-secondary-blue text-white px-10"} onPress={onClose}>
                                                Contacter
                                            </Button>
                                        </div>
                                    </ModalBody>

                                </>)}
                        </ModalContent>
                    </Modal>
                </div>
            }
        </>

    );
}

export default Page;
