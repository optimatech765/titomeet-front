
"use client";
import { EventDtoResponse } from "@/utils/dto/events.dto";
import { formatDate, getHourMinute } from "@/utils/functions/date.function";
import { Button, Card, Progress } from "@heroui/react";
import {
  AlignHorizontalDistributeCenter,
  Clock,
  Eclipse,
  FilePenLine,
  Hourglass,
  MapPinIcon,
  MessageCircleMore,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const EventCardHorizontalComponent = ({ status = "draft", event }: { event: EventDtoResponse, status?: string }) => {
  return (
    <Card
      isBlurred
      className="border bg-white dark:bg-default-100/50 h-40  "
      shadow="sm"
    >
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4  items-stretch">
        {/* Image section */}
        <div className="relative col-span-12 md:col-span-3 h-auto">
          <Image
            alt="Event"
            className="h-full w-full object-cover rounded-s-md"
            src={event?.coverPicture}
            width={200}
            height={200}
          />
        </div>

        {/* Content section */}
        <div className="col-span-12 md:col-span-9 flex flex-col justify-between p-2">
          <div className="flex gap-4 items-start">
            {/* Date */}
            <div className="text-center w-5 shrink-0">
              <p className="text-2xl font-bold leading-none">{formatDate(event?.startDate).day}</p>
              <p className="text-xs uppercase text-red-600 font-semibold">{formatDate(event?.startDate).month}</p>
            </div>

            {/* Infos */}
            <div className="flex-1 space-y-2">
              <h2 className="text-base font-bold">{event?.name}</h2>

              <div className="flex flex-wrap md:justify-between gap-3 text-xs text-gray-700 items-center">
                <p className="flex items-center gap-1">
                  <MapPinIcon className="w-4 h-4 text-white" fill="red" />
                  {event?.address?.city}
                </p>
                <p className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-white" fill="red" />
                  {getHourMinute(event?.startTime)}
                </p>
                <p className="flex items-center gap-1 text-red-600 font-semibold">
                  <AlignHorizontalDistributeCenter className="w-4 h-4 text-white" fill="red" />
                  {event?.accessType === "FREE" ? "Gratuit" : "Payant"}
                </p>
              </div>

              {/* Participants */}
              <div className="flex items-center gap-2">
                <p className="flex items-center text-xs gap-1">
                  <User className="w-4 h-4 text-white" fill="red" />
                  {event?.participants?.length} Par/{event?.capacity}
                </p>
                <Progress
                  value={25}
                  size="md"
                  className="flex-1"
                  classNames={{ indicator: "bg-[#22d3ee]" }}
                  aria-label="Progress"
                />
              </div>

              {/* Programmé */}
              {status === "programming" && (
                <p className="flex items-center text-xs gap-1">
                  <Hourglass className="w-4 h-4 text-yellow-600" />
                  <span className="text-gray-600">Programmé pour :</span>
                  <span className="text-black">
                    15-02-2025 à 15:00
                  </span>
                </p>
              )}

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-2 mt-4">

                {status === "past" ? <>
                  <Button name="Review"
                    startContent={<Star className="w-4 h-4" fill="red" />}
                    size="sm"
                    variant="ghost"
                    radius="full"
                    color="primary"
                    className="flex border md:w-2/3"
                  >
                    Voir les avis
                  </Button>
                </> : <>

                  <Button name="Update"
                    href={`/user/events/${event?.id}/update`}
                    as={Link}
                    startContent={<FilePenLine className="w-4 h-4" />}
                    size="sm"
                    variant="ghost"
                    radius="full"
                    color="primary"
                    className="flex-1 border"
                  >
                    Modifier évènement
                  </Button>




                  {status === "published" ? (
                    <Button
                      name="Chat"
                      startContent={<MessageCircleMore className="w-4 h-4" />}
                      size="sm"
                      variant="ghost"
                      radius="full"
                      color="primary"
                      className="flex-1 border"
                    >
                      Accéder à la discussion
                    </Button>
                  ) : (
                    <Button
                      name="Publish"
                      startContent={<Eclipse className="w-4 h-4" />}
                      size="sm"
                      variant="ghost"
                      radius="full"
                      color="primary"
                      className="flex-1 border"
                    >
                      Publier évènement
                    </Button>
                  )}
                </>}

              </div>
            </div>
          </div>


        </div>
      </section>
    </Card>
  );
};
