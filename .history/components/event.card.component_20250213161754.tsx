"use client";


import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { CalendarDays, MapPin, Users, Clock } from "lucide-react";
import Image from "next/image";

export const EventCardComponent = () => {
  return (
    <Card className="max-w-sm rounded-xl shadow-lg border border-gray-200 bg-white">
      <CardHeader className="relative h-56 w-full overflow-hidden rounded-t-xl">
        <Image
          src="/img/event-image.jpg" // Remplace par ton image
          alt="After Work Networking"
          layout="fill"
          objectFit="cover"
        />
      </CardHeader>

      <CardBody className="pt-4">
        <div className="flex gap-4">
          <div className="">
            <div className="text-center  py-1 rounded-lg ">
              <p className="text-2xl font-bold text-black">14</p>
              <p className="text-sm uppercase text-red-600">AVR</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-black font-bold ">After Work Networking</h3>
            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet,</p>

            <div className="mt-3 grid grid-cols-2 space-y-2 text-gray-700 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" /> Cotonou
              </p>
              <p className="flex items-center gap-2">
                <Users className="w-4 h-4 text-red-500" /> 25 Participants
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-500" /> 15:00
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
