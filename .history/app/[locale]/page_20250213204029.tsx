
import { EventCardComponent } from "@/components/event.card.component";
import { SwitchThemeComponent } from "@/components/switch.theme.component";
import { LangSelect } from "@/locales/lang.select";
import { getI18n, getScopedI18n } from "@/locales/server";
import { HeroSection } from "@/sections/hero.section";
import { Button } from "@heroui/button";


export default async function Home() {

  const t = await getI18n()
  const landingT = await getScopedI18n('landing')


  return (
    <div>
      {/* <LangSelect /> */}
      {/* <SwitchThemeComponent /> */}

      {/* Ajout du composant section hero */}
      <HeroSection />

      {/* <Button
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        radius="full"
      >
        {t('hello')}
      </Button> */}
      {/* <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">{landingT('title')}</h1>
        <p className="text-center text-lg">{landingT('description')}</p>
      </div> */}

      <div className="bg-gradiantBg py-20 px-7 md:px-14">

        <section className="pb-7">


          <div>
            <h3 className="text-primary font-extrabold text-4xl font-poppins ">Evenements à venir</h3>
            <span className="text-[#1E1E1E] text-base">Des événements exclusifs, des places limitées</span>
            <div className="bg-secondary h-1 max-w-36 mt-1 rounded-tl-md "></div>
          </div>
          <div className="mb-6 md:grid space-y-3 md:space-y-0 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-9">

            <EventCardComponent />
            <EventCardComponent />
            <EventCardComponent />
            <EventCardComponent />
            <EventCardComponent />
            <EventCardComponent />

          </div>

          <div className="text-center mt-6">
            <Button className="bg-primary text-white rounded-full p-3 ml-2  ">
              Voir tous les événements
            </Button>
          </div>

        </section>
        <section className="pt-6 mt-7">
          <div>
            <h3 className="text-primary font-extrabold text-4xl font-poppins text-center ">Categories d’evenements</h3>
            <span className="text-[#1E1E1E] text-base text-center block">Trouvez l’événement qui vous correspond</span>
            <div className="bg-secondary h-1 max-w-36 mt-1 rounded-tl-md mx-auto rounded-r-full "></div>
          </div>
        </section>
      </div>


    </div>
  );
}
