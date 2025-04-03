import { ProvidersResponseDto } from '@/utils/dto/providers.dto';
import { Card, CardBody } from '@heroui/react';
import { MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect } from 'react';

export const ServiceCardComponent = ({ data }: { data: ProvidersResponseDto }) => {

    useEffect(() => {
        console.log("Je suis ici data", data)
    }, [data]);
    return (
        <Card className="max-w-md cursor-pointer rounded-xl shadow-lg border border-gray-200 bg-white font-poppins">
            <CardBody className='px-3 md:px-9'>
                <div className='flex flex-col gap-1.5'>
                    <Image
                        src={data.image}
                        alt={"service"}
                        width={200}
                        height={200}
                        className="rounded-full h-20 w-20 object-cover mx-auto "
                    />
                </div>
                <div className='flex flex-col gap-1.5'>
                    <h3 className='font-semibold text-lg text-center'>{data?.name}</h3>
                    <span className='text-lg font-light text-center block'>{data?.category?.name}</span>
                    <span className='text-xs justify-center flex items-center'><MapPin className={"text-white h-4 w-4 "} fill='#ee3540' /> {data?.address?.city},{data?.address?.country}</span>
                    <div className='flex justify-center items-center gap-2 mt-2'>
                        <Star className={"h-3 w-3 text-secondary "} fill='#f08621' />
                        <Star className={"h-3 w-3 text-secondary "} fill='#f08621' />
                        <Star className={"h-3 w-3 text-secondary "} fill='#f08621' />
                        <Star className={"h-3 w-3 text-secondary "} fill='#f08621' />
                        <Star className={"h-3 w-3 text-slate-300"} fill='#cbd5e1' />
                    </div>
                </div>
            </CardBody>

        </Card>
    );
}

