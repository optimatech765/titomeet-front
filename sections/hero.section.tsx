/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useScopedI18n } from "@/locales/client";
import { SlidesImages } from "@/utils/constantes";
import { Button } from "@heroui/button";
import { Card, Image, Input } from "@heroui/react";
import { MapPinIcon, SearchIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';// Importer les styles de Swiper
// Importer les modules de Swiper que nous souhaitons utiliser
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { useEventsStore } from "@/stores/events.store";
import "swiper/css/autoplay";
import Link from "next/link";


export const HeroSection = () => {
    const hero = useScopedI18n('hero');
    const inputT = useScopedI18n('input');
    const buttonT = useScopedI18n('button');
    const [activeIndex, setActiveIndex] = useState(1);
    const [searchParameter, setSearchParameter] = useState({
        keyWord: "",
        localisation: ""
    });
    const { fetchEventList } = useEventsStore();

    const handleFindEvent = () => {
        fetchEventList({ search: searchParameter.keyWord, page: 1, limit: 25, status: "PUBLISHED", })
    }

    useEffect(() => {
        if (searchParameter.keyWord === "") {
            fetchEventList({ page: 1, limit: 25, status: "PUBLISHED", startDate: new Date().toISOString().split("T")[0] })
        }
    }, [searchParameter.keyWord]);


    return (
        <section className="bg-white  py-3">
            <div className="section-container mx-auto lg:flex lg:flex-row items-center  justify-between">
                {/* Texte et boutons */}
                <div className="lg:w-1/2  lg:text-left flex flex-col gap-4 mt-9">

                    <div className="text-4xl md:text-5xl font-bold text-black leading-tight">
                        <h1 className="text-primary">Tit<span className="text-secondary" >o</span>meet,</h1>
                        <h2 className="text-black">{hero(`title${activeIndex}` as any)}</h2>
                    </div>

                    <div>
                        <h3 className="text-gray-600 text-lg">
                            {hero(`description${activeIndex}` as any)}
                        </h3>
                    </div>


                    {/* Boutons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button
                            name="Découvrir les évènements"
                            as={Link}
                            href="#evenements"
                            className="bg-primary text-white"
                            radius="full" size="lg">
                            {hero("discover")}
                        </Button>
                        <Button
                            name="Créer un événement"
                            as={Link}
                            href="/user/events/new"
                            className="border-primary text-primary"
                            variant="bordered" radius={"full"} size="lg">
                            {hero("create")}
                        </Button>
                    </div>

                    {/* Barre de recherche */}

                    <div className=" min-h-[93px] bg-hero-pattern bg-red-100 p-2  md:p-4 rounded-lg md:rounded-full mt-1.5  flex flex-col md:flex-row items-center gap-4 shadow-md">
                        <Input
                            onChange={(e) => setSearchParameter({ ...searchParameter, keyWord: e.target.value })}
                            type="text"
                            placeholder={inputT("serachEventPlaceholder")}
                            radius="full"
                            startContent={<SearchIcon className="w-4 h-4 text-primary " />}
                            className=""
                            size="lg"
                        />
                        <Input
                            type="text"
                            onChange={(e) => setSearchParameter({ ...searchParameter, localisation: e.target.value })}
                            placeholder={inputT("location")}
                            radius="full"
                            startContent={<MapPinIcon className="w-4 h-4 text-primary " />}
                            className=""
                            size="lg"
                        />

                        <Button name="Rechercher" onPress={handleFindEvent} isIconOnly className="bg-white hidden md:block text-secondary rounded-full p-3 ml-2 hover:bg-secondary hover:text-white">
                            <SearchIcon className="w-4 h-4 " />
                            <span className="md:hidden">{buttonT('search')}</span>
                        </Button>
                        <Button name="Rechercher" onPress={handleFindEvent} className="md:hidden flex w-full text-lg bg-secondary text-white rounded-full p-3 ml-2 hover:bg-secondary hover:text-white">
                            <SearchIcon className="w-4 h-4 " />
                            <span className="">{buttonT('search')}</span>
                        </Button>
                    </div>

                </div>

                {/* Image avec NextUI Card */}
                <div className="lg:w-1/2  justify-end mt-4 hidden lg:flex ">
                    <Card radius="lg" shadow="md" className="rounded-[60px] shadow-lg  max-h-[425px] max-w-[525px] overflow-hidden">
                        <Swiper
                            style={{ overflow: "visible" }}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                waitForTransition: false
                            }}
                            spaceBetween={0}
                            slidesPerView={"auto"}
                            loop={true}
                            speed={1000}
                            watchSlidesProgress={true}
                            loopAdditionalSlides={3}
                            freeMode={true}
                            // lazy={true}
                            grabCursor={true} // Rend le défilement plus fluide
                            direction="horizontal" // Assure un glissement horizontal
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}

                        >
                            {SlidesImages.map((item: any, index: number) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={550}
                                        height={550}
                                        className="object-cover w-full h-full"
                                    />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </Card>
                </div>
            </div>
        </section>
    );
};

