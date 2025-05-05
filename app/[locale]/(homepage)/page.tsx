
import { VideoPlayer } from "@/components/video.player.component";
import { getScopedI18n } from "@/locales/server";
import { BecomeProviderSection } from "@/sections/become-provider.section";
import { CategorieSection } from "@/sections/categorie.section";
import { EventsSection } from "@/sections/events.section";
import { HeroSection } from "@/sections/hero.section";
import { PartenairesSection } from "@/sections/partner.section";


export default async function Home() {

  const landingTEvent = await getScopedI18n('landing.event')


  return (
    <div>

      {/* <NavbarSection /> */}
      {/* Ajout du composant section hero */}
      <HeroSection />

      {/* Section pour afficher les événements */}
      <div className="bg-gradiantBg py-10">

        <section className="pb-6 section-container">


          <div id="evenements">
            <h3 className="text-primary font-extrabold text-xl md:text-4xl font-poppins ">{landingTEvent('title')}</h3>
            <span className="text-[#1E1E1E] text-base">{landingTEvent('description')}</span>
            <div className="bg-secondary h-2 max-w-36 mt-1 rounded-tl-md "></div>
          </div>

          <EventsSection />

          {/* <div className="text-center mt-7">
            <Button className="bg-primary text-white rounded-full p-3 ml-2  ">
              Voir tous les événements
            </Button>
          </div> */}

        </section>

        {/* Catégories */}
        <section className="pt-6 mt-6 section-container" id="categories" >
          <div className="space-y-1">
            <h3 className="text-primary font-extrabold text-xl md:text-4xl font-poppins text-center ">Categories d’evenements</h3>
            <span className="text-[#1E1E1E] text-base text-center block">Trouvez l’événement qui vous correspond</span>
            <div className="bg-secondary h-2 max-w-36 mt-1 rounded-tl-md mx-auto rounded-r-full "></div>
          </div>
          <div>
            <CategorieSection />
          </div>
        </section>
      </div>

      <section className="bg-footer md:pb-0 pb-16" id="fonctionnalites">
        <VideoPlayer
          poster="/img/function-Imagea.jpg"
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />

      </section>

      {/* Fonctionnalités */}
      <section className="" id="providers">
        <BecomeProviderSection />
      </section>


      {/* Partenaires */}
      <section className="bg-partner" id="partenaires">
        <PartenairesSection />
      </section>

    </div>
  );
}
