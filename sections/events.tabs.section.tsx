import { Tabs, Tab, Chip } from "@heroui/react";

export const EventsTabsComponent = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
    return (
        <div className="flex w-full flex-col">
            <Tabs
                aria-label="Options"
                classNames={{
                    tabList: "gap-1 sm:gap-6 w-full relative rounded-none p-0 border-b border-divider underline-primary",
                    cursor: "w-full bg-[#22d3ee]",
                    tab: "max-w-fit px-0 h-12",
                    tabContent: "group-data-[selected=true]:text-primary underline-offset-4 underline-2 underline-primary",
                }}
                color="danger"
                variant="underlined"
            >
                <Tab
                    onClick={() => setActiveTab("events")}
                    value="events"
                    key="Evenements"
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
            >
                <Tab
                    onClick={() => setActiveTab("publish")}
                    value="publish"
                    key="Publié"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("publish")}>

                            <span>Publiés</span>

                        </div>
                    }
                />

                <Tab
                    onClick={() => setActiveTab("draft")}
                    key="draft"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("draft")}>

                            <span>Brouillons</span>

                        </div>
                    }
                />

                <Tab
                    onClick={() => setActiveTab("programming")}
                    key="programming"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("programming")}>

                            <span>Programmés</span>

                        </div>
                    }
                />

                <Tab
                    onClick={() => setActiveTab("past")}
                    key="past"
                    title={
                        <div className="flex items-center space-x-2" onClick={() => setActiveTab("past")}>

                            <span>Passé</span>

                        </div>
                    }
                />
            </Tabs>
        </div>
    );
}
