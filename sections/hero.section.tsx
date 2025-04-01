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


export const HeroSection = () => {
    const landingText = useScopedI18n('landing.hero');
    const landingTButton = useScopedI18n('landing.button');
    const [activeIndex, setActiveIndex] = useState(0);
    const [searchParameter, setSearchParameter] = useState({
        keyWord: "",
        localisation: ""
    });
    const { fetchEventList } = useEventsStore();

    const handleFindEvent =() => {
        fetchEventList({ search: searchParameter.keyWord })
    }

    useEffect(() => {
        if(searchParameter.keyWord === ""){
            fetchEventList()
        }
    }, [searchParameter.keyWord]);


    return (
        <section className="bg-white  py-3">
            <div className="section-container mx-auto lg:flex lg:flex-row  justify-between">
                {/* Texte et boutons */}
                <div className="lg:w-1/2  lg:text-left space-y-7 mt-9">
                    <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                        <p className="text-primary">Tit<span className="text-secondary" >o</span>meet,</p>
                        <p className="text-black">{landingText(activeIndex + '.title' as any)}</p>
                    </h1>
                    <p className="text-gray-600 mt-4 text-lg">
                        {landingText(activeIndex + '.description' as any)}
                    </p>

                    {/* Boutons */}
                    <div className="mt-6 mb-4 flex flex-col sm:flex-row items-center gap-4">
                        <Button
                            as="a"
                            href="#evenements"
                            color="primary" radius="full" size="lg">
                            {landingTButton('first')}
                        </Button>
                        <Button
                            as="a"
                            href="/user/events/new"
                            color="secondary" variant="bordered" radius={"full"} size="lg">
                            {landingTButton('second')}
                        </Button>
                    </div>

                    {/* Barre de recherche */}

                    <div className="mt-14  min-h-[93px] bg-hero-pattern bg-red-100  p-2 rounded-md  flex flex-col md:flex-row items-center gap-4 shadow-md">
                        <Input
                            onChange={(e) => setSearchParameter({ ...searchParameter, keyWord: e.target.value })}
                            type="text"
                            placeholder="Rechercher événement"
                            radius="full"
                            startContent={<SearchIcon className="w-4 h-4 text-primary " />}
                            className=""
                            size="lg"
                        />
                        <Input
                            type="text"
                            onChange={(e) => setSearchParameter({ ...searchParameter, localisation: e.target.value })}
                            placeholder="Localisation"
                            radius="full"
                            startContent={<MapPinIcon className="w-4 h-4 text-primary " />}
                            className=""
                            size="lg"
                        />

                        <Button onPress={handleFindEvent}  isIconOnly className="bg-white hidden md:block text-primary rounded-full p-3 ml-2 hover:bg-primary hover:text-white">
                            <SearchIcon className="w-4 h-4 " />
                            <span className="md:hidden">Rechercher</span>
                        </Button>
                        <Button onPress={handleFindEvent} className="md:hidden flex w-full text-lg bg-secondary text-white rounded-full p-3 ml-2 hover:bg-primary hover:text-white">
                            <SearchIcon className="w-4 h-4 " />
                            <span className="">Rechercher</span>
                        </Button>
                    </div>


                </div>

                {/* Image avec NextUI Card */}
                <div className="lg:w-1/2  justify-end mt-4 hidden lg:flex ">
                    <Card radius="lg" shadow="md" className="rounded-[160px] shadow-lg  max-h-[525px] max-w-[525px] overflow-hidden">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 2500, disableOnInteraction: false }} 
                            spaceBetween={0} 
                            slidesPerView={1} 
                            loop={true}
                            speed={1000}
                            direction="horizontal" // Assure un glissement horizontal
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

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

