"use client";


import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { Clock, MapPinIcon, AlignHorizontalDistributeCenter, Heart, Share, Share2 } from "lucide-react";
import Image from "next/image";

export const EventCardComponent = () => {
  return (
    <Card className="max-w-sm rounded-xl shadow-lg border border-gray-200 bg-white font-poppins">
      <CardHeader className="relative h-56 w-full overflow-hidden rounded-t-xl">
        <Image
          src="/img/event-image.jpg" // Remplace par ton image
          alt="After Work Networking"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full h-full "> {/* //bg-gradient-to-b from-transparent to-black opacity-50 */}
          <div className="absolute flex items-center justify-items-end justify-end w-full pt-4 pr-4  ">

            <Button isIconOnly className=" bg-white rounded-full p-3 ml-2  ">
              <Share2 className="w-6 h-6 text-red-500 text-right " />
            </Button>


            <Button isIconOnly className=" bg-white rounded-full p-3 ml-2  ">
              <Heart className="w-6 h-6 text-red-500  text-right " />
            </Button>

          </div>

        </div>


      </CardHeader>

      <CardBody className="pt-2">
        <div className="flex gap-4">
          <div className="">
            <div className="text-center  py-1 rounded-lg font-bold ">
              <p className="text-2xl font-bold text-black">14</p>
              <p className="text-sm uppercase text-red-600">AVR</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-black font-normal md:font-semibold xl:font-bold ">After Work Networking</h3>
            <p className="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet,</p>

            <div className="mt-2 grid space-y-3 sm:space-y-0 sm:grid-cols-2 font-normal text-gray-700 text-sm">
              <p className="flex items-center gap-2">
                <MapPinIcon fill="red" className="w-4 h-4 text-white" /> Cotonou
              </p>
              <p className="flex items-center gap-2">
                <AlignHorizontalDistributeCenter className="w-4 h-4 text-white" fill="red" /> 25 Participants
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" fill="red" /> 15:00
              </p>
              <p className="flex items-center gap-2 text-red-500">
                GRATUIT
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
