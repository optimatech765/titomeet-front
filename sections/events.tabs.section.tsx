import { Tabs, Tab, Chip } from "@heroui/react";

export const EventsTabsComponent = () => {
    return (
        <div className="flex w-full flex-col">
            <Tabs
                aria-label="Options"
                classNames={{
                    tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider underline-primary",
                    cursor: "w-full bg-[#22d3ee]",
                    tab: "max-w-fit px-0 h-12",
                    tabContent: "group-data-[selected=true]:text-primary underline-offset-4 underline-2 underline-primary",
                }}
                color="danger"
                variant="underlined"
            >
                <Tab
                    key="Evenements"
                    title={
                        <div className="flex items-center space-x-2">

                            <span>Evènements</span>

                        </div>
                    }
                />

                <Tab
                    key="showmore"
                    title={
                        <div className="flex items-center space-x-2">

                            <span>Découvrir</span>

                        </div>
                    }
                />

                <Tab
                    key="favoris"
                    title={
                        <div className="flex items-center space-x-2">

                            <span>Favoris</span>

                        </div>
                    }
                />

                <Tab
                    key="history"
                    title={
                        <div className="flex items-center space-x-2">

                            <span>Historiques</span>
                           
                        </div>
                    }
                />
            </Tabs>
        </div>
    );
}
