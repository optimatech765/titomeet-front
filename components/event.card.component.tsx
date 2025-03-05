"use client";


import { Button, Card, CardHeader } from "@heroui/react";
import { Clock, MapPinIcon, AlignHorizontalDistributeCenter, Heart, Share2, Ticket } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const EventCardComponent = () => {
  const [favoris, setFavoris] = useState(false);
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


            <Button isIconOnly
              onPress={() => setFavoris(!favoris)}
              className=" bg-white rounded-full p-3 ml-2  ">
              <Heart className="w-6 h-6 text-red-500  text-right "
                fill={favoris ? "red" : "white"}

              />
            </Button>

          </div>

        </div>


      </CardHeader>

      <div className="py-2 pl-2 pr-0">
        <div className="flex gap-2">
          <div className="">
            <div className="text-center  py-1 rounded-lg font-bold ">
              <p className="text-2xl font-bold text-black">14</p>
              <p className="text-sm uppercase text-red-600">AVR</p>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg text-black font-normal md:font-semibold ">After Work Networking</h3>
            <p className="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet,</p>

            <div className="mt-2 flex flex-wrap justify-between items-center font-normal text-gray-700 text-sm">
              <div className="flex items-center gap-0.5 flex-1">
                <MapPinIcon fill="red" className="w-5 h-5 text-white mx-0" /> Cotonou
              </div>
              <div className="flex items-center gap-0.5 flex-1">
                <AlignHorizontalDistributeCenter className="w-5 h-5 text-white mx-0" fill="red" /> 25 Participants
              </div>

            </div>
            <div className="mt-2 flex flex-wrap justify-between items-center font-normal text-gray-700 text-sm">

              <div className="flex items-center gap-0.5 flex-1">
                <Clock className="w-5 h-5 text-white mx-0" fill="red" /> 15:00
              </div>
              <div className="flex items-center gap-0.5 text-red-500 flex-1">
                <Ticket className="w-5 h-5 text-white mx-0" fill="red" />
                Gratuit
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
