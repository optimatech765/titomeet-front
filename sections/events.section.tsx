/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { EmptyDateComponent } from "@/components/empty.date.component";
import { EventCardComponent } from "@/components/event.card.component";
import { LoadingComponent2 } from "@/components/loading.component";
import { useEventsStore } from "@/stores/events.store";
import { EventDtoResponse } from "@/utils/dto/events.dto";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";

export const EventsSection = ({ withSearch = false, status="PUBLISHED" }: { withSearch?: boolean, status?: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    const { fetchEventList, dataList, isLoading: eventLoading } = useEventsStore();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoading) {
                    loadMoreItems();
                }
            },
            { rootMargin: "100px" }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        // if (status) {
        //     fetchEventList({ page: 1, limit: 25, status: status,startDate:new Date().toLocaleDateString("en") });
        // } else {
            fetchEventList({ page: 1, limit: 25,status:status,startDate:new Date().toLocaleDateString("en") });
        // }
        return () => {
            if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
        };

    }, []);

    const loadMoreItems = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="py-10 ">
            {eventLoading ?
                <div ref={loadMoreRef} className="mt-4 text-center">
                    {eventLoading &&
                        <LoadingComponent2 />
                    }
                </div> : <>
                    {dataList?.length === 0 ? <>
                        <div className="text-center">
                          <EmptyDateComponent />
                        </div>
                    </> :
                        <>
                            <div className={clsx({ "lg:grid-cols-4": !withSearch, "lg:grid-cols-3": withSearch }, "md:grid md:space-y-0 md:grid-cols-2  gap-3")} >

                                {dataList.map((event: EventDtoResponse, index: number) => (
                                    <EventCardComponent event={event} key={index} />
                                ))}
                            </div>
                        </>
                    }
                </>
            }

        </div>
    );
};
