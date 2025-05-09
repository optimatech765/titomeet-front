
import { Tabs, Tab, } from "@heroui/react";

export const EventsTabsComponent = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
    return (
        <div className="flex w-full flex-col">
            <Tabs
                aria-label="Options"
                classNames={{
                    tabList: "gap-1 sm:gap-6  relative rounded-none p-0 border-b border-divider underline-primary",
                    cursor: "w-full bg-[#22d3ee]",
                    tab: "max-w-fit px-0 h-12",
                    base: "justify-center",
                    tabContent: "group-data-[selected=true]:text-primary underline-offset-4 underline-2 underline-primary",
                }}
                color="danger"
                variant="underlined"
                selectedKey={activeTab} onSelectionChange={(value) => setActiveTab(value as string)}
            >
                <Tab
                    onClick={() => setActiveTab("events")}
                    value="events"
                    key="events"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("events")}>

                            <span>Evènements</span>

                        </div>
                    }
                />

                <Tab
                    onClick={() => setActiveTab("showmore")}
                    key="showmore"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("showmore")}>

                            <span>Découvrir</span>

                        </div>
                    }
                />


                <Tab
                    onClick={() => setActiveTab("favoris")}
                    key="favoris"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("favoris")}>

                            <span>Favoris</span>

                        </div>
                    }
                />



                <Tab
                    onClick={() => setActiveTab("history")}
                    key="history"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("history")}>

                            <span>Historiques</span>

                        </div>
                    }
                />

            </Tabs>
        </div>
    );
}

export const OurEventsTabsComponent = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
    return (
        <div className="flex w-full flex-col">
            <Tabs
                size="lg"
                fullWidth={true}
                aria-label="Options"
                classNames={{
                    tabList: "gap-1 sm:gap-6 w-full relative rounded-none p-0 border-b border-divider underline-primary",
                    cursor: "max-w-xl bg-[#22d3ee]",
                    tab: "max-w-xl px-0 h-12",
                    tabContent: "group-data-[selected=true]:text-primary underline-offset-4 underline-2 underline-primary",
                }}
                color="danger"
                variant="underlined"
                selectedKey={activeTab} onSelectionChange={(value) => setActiveTab(value as string)}
            >
                <Tab
                    onClick={() => setActiveTab("PUBLISHED")}
                    value="PUBLISHED"
                    key="PUBLISHED"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("PUBLISHED")}>

                            <span>Publiés</span>

                        </div>
                    }
                />

                <Tab
                    onClick={() => setActiveTab("DRAFT")}
                    key="DRAFT"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("DRAFT")}>

                            <span>Brouillons</span>

                        </div>
                    }
                />

                <Tab
                    onClick={() => setActiveTab("PROGRAMMING")}
                    key="PROGRAMMING"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("PROGRAMMING")}>

                            <span>Programmés</span>

                        </div>
                    }
                />

                <Tab
                    onClick={() => setActiveTab("FINISHED")}
                    key="FINISHED"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("FINISHED")}>

                            <span>Passé</span>

                        </div>
                    }
                />
            </Tabs>
        </div>
    );
}
