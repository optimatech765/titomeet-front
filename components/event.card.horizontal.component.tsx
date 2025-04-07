
"use client";
import { Button, Card, Progress } from "@heroui/react";
import {
  AlignHorizontalDistributeCenter,
  Clock,
  Eclipse,
  FilePenLine,
  Hourglass,
  MapPinIcon,
  MessageCircleMore,
  User,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export const EventCardHorizontalComponent = () => {
  return (
    <Card
      isBlurred
      className="border bg-white dark:bg-default-100/50 max-h-fit"
      shadow="sm"
    >
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 p-2 items-stretch">
        {/* Image section */}
        <div className="relative col-span-12 md:col-span-3 h-44 md:h-auto">
          <Image
            alt="Event"
            className="h-full w-full object-cover rounded-md"
            src="/img/event-image.jpg"
            width={300}
            height={300}
          />
        </div>

        {/* Content section */}
        <div className="col-span-12 md:col-span-9 flex flex-col justify-between">
          <div className="flex gap-4">
            {/* Date */}
            <div className="text-center w-12 shrink-0">
              <p className="text-2xl font-bold leading-none">15</p>
              <p className="text-xs uppercase text-red-600 font-semibold">AVR</p>
            </div>

            {/* Infos */}
            <div className="flex-1 space-y-2">
              <h2 className="text-base font-bold">After Work Networking</h2>

              <div className="flex flex-wrap gap-3 text-xs text-gray-700 items-center">
                <p className="flex items-center gap-1">
                  <MapPinIcon className="w-4 h-4 text-red-600" fill="red" />
                  Cotonou
                </p>
                <p className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-red-600" fill="red" />
                  15:00
                </p>
                <p className="flex items-center gap-1 text-red-600 font-semibold">
                  <AlignHorizontalDistributeCenter className="w-4 h-4 text-red-600" fill="red" />
                  Gratuit
                </p>
              </div>

              {/* Participants */}
              <div className="flex items-center gap-2">
                <p className="flex items-center text-xs gap-1">
                  <User className="w-4 h-4 text-red-600" fill="red" />
                  25 Par/45
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
            </div>
          </div>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button
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
          </div>
        </div>
      </section>
    </Card>
  );
};
