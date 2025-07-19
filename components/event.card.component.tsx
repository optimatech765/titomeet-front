"use client";


import { useAppContext } from "@/context";
import { useEventsStore } from "@/stores/events.store";
import { EventDtoResponse } from "@/utils/dto/events.dto";
import { formatDate, getHourMinute } from "@/utils/functions/date.function";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { Clock, MapPinIcon, AlignHorizontalDistributeCenter, Heart, Ticket } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ShareEventComponent } from "./share-event.component";
import { EventServices } from "@/services/events/event.services";

export const EventCardComponent = ({ event }: { event: EventDtoResponse }) => {
  const { isAuth } = useAppContext();
  const router = useRouter();
  const { UpdateEventsDataList } = useEventsStore();

  const handleFavoris = (id: string) => {
    try {
      if (isAuth?.id && isAuth?.id !== "") {
        const token = localStorage?.getItem('accessToken') || "";
        const eventServices = new EventServices(token);
        eventServices.toggleFavorit(id).then((response) => {
          console.log(response);
          toast.success("Evènement favoris modifié avec succès", {
            position: "top-center",
            autoClose: 1000,
          });
          UpdateEventsDataList(id, { isFavorite: !event?.isFavorite });
        },
          (error) => {
            console.log(error);
          }
        )
      } else {
        toast.error("Vous devez être connecté pour ajouter un favoris");
      }
    } catch (error) {
      console.log(error);
      toast.error("Une erreur est survenue lors de l'ajout d'un favoris");

    }
  };

  return (

    <Card className="max-w-sm mx-auto md:mx-0 rounded-xl shadow-lg border border-gray-200 bg-white font-poppins">
      <CardHeader className="relative h-56 w-full overflow-hidden rounded-t-xl">
        <Image
          onClick={() => router.push(isAuth?.id ? `/user/events/${event.id}` : `/events/${event.id}`)}
          src={event.coverPicture} // Remplace par ton image
          alt="After Work Networking"
          layout="fill"
          objectFit="cover"
          className={"cursor-pointer"}
        />
        <div className="absolute z-50 top-0 left-0 w-full h-fit "> {/* //bg-gradient-to-b from-transparent to-black opacity-50 */}
          <div className="absolute flex items-center justify-items-end justify-end w-full pt-4 pr-4  ">

            <ShareEventComponent singleEvent={event} iconly={true} />

            <Button name="Favoris" isIconOnly
              onPress={() => handleFavoris(event.id as string)}
              className=" bg-white rounded-full p-3 ml-2  ">
              <Heart className="w-6 h-6 text-red-500  text-right "
                fill={event?.isFavorite ? "red" : "white"}
              />
            </Button>

          </div>

        </div>


      </CardHeader>
      <CardBody>
        <div className="py-2 pl-2 pr-0 cursor-pointer" onClick={() => router.push(isAuth?.id ? `/user/events/${event.id}` : `/events/${event.id}`)}>
          <div className="flex gap-2 items-start">
            <div className="">
              <div className="text-center rounded-lg font-bold ">
                <p className="text-2xl font-bold text-black">{formatDate(event?.startDate).day}</p>
                <p className="text-sm uppercase text-red-600">{formatDate(event?.startDate).month}</p>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg text-black font-normal md:font-semibold ">{event?.name}</h3>
              <p className="text-gray-600 text-sm mt-1 ">{event?.description?.slice(0, 20)}...</p>

            </div>
          </div>

          <div className={"space-y-2 mt-2"}>
            <div className=" flex flex-wrap justify-between items-center font-normal text-gray-700 text-sm">
              <div className="flex items-center gap-0.5 flex-1">
                <MapPinIcon fill="red" className="w-5 h-5 text-white px-0" /> {event?.address?.city}
              </div>
              <div className="flex items-center gap-0.5 flex-1">
                <AlignHorizontalDistributeCenter className="w-5 h-5 text-white px-0" fill="red" /> {event?.participants?.length} Participants
              </div>

            </div>
            <div className=" flex flex-wrap justify-between items-center font-normal text-gray-700 text-sm">

              <div className="flex items-center gap-0.5 flex-1">
                <Clock className="w-5 h-5 text-white px-0" fill="red" /> {getHourMinute(event?.startTime)}
              </div>
              <div className="flex items-center gap-0.5 text-red-500 flex-1">
                <Ticket className="w-5 h-5 text-white px-0" fill="red" />
                {event?.accessType === "FREE" ? "Gratuit" : "Payant"}
              </div>
            </div>
          </div>
        </div>
      </CardBody>


    </Card>

  );
}
