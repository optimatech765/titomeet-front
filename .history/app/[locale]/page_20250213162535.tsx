
import { EventCardComponent } from "@/components/event.card.component";
import { SwitchThemeComponent } from "@/components/switch.theme.component";
import { LangSelect } from "@/locales/lang.select";
import { getI18n, getScopedI18n } from "@/locales/server";
import { Button } from "@heroui/button";


export default async function Home() {

  const t = await getI18n()
  const landingT = await getScopedI18n('landing')


  return (
    <div>
      <LangSelect />
      <SwitchThemeComponent />
      <Button
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        radius="full"
      >
        {t('hello')}
      </Button>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">{landingT('title')}</h1>
        <p className="text-center text-lg">{landingT('description')}</p>
      </div>

      <div className="grid grid-cols-3 mx-14  gap-5 mt-9">
        <EventCardComponent />
        <EventCardComponent />
        <EventCardComponent />
      </div>
    </div>
  );
}
