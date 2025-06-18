import { EventDetailSection } from "@/sections/event.detail.section";
import { OrganiserInfoComponent } from "@/components/organiser.info.component";

export default function ProviderPage() {
    return <div className="mx-auto p-6 mb-12 section-container md:px-10">
        <EventDetailSection />
        <div className="mt-6 space-y-2.5">
            <h2 className="information-title1">Informations sur l’organisateur</h2>
            <OrganiserInfoComponent />
        </div>

    </div>;
}