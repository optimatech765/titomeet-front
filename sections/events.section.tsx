"use client";

import { EventCardComponent } from "@/components/event.card.component";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";

export const EventsSection = ({withSearch=false}: {withSearch?: boolean}) => {
    const [items, setItems] = useState(Array.from({ length: 9 }, (_, i) => i + 8));
    const [isLoading, setIsLoading] = useState(false);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

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

        return () => {
            if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
        };
    }, [isLoading]);

    const loadMoreItems = () => {
        setIsLoading(true);
        setTimeout(() => {
            setItems((prev) => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1)]);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen ">
            <div className={clsx({"lg:grid-cols-4 xl:grid-cols-5":!withSearch,"lg:grid-cols-3 xl:grid-cols-4":withSearch},"mb-7 md:grid space-y-3 md:space-y-0 md:grid-cols-2  gap-3 mt-2")} >
                {items.map((item) => (
                    <EventCardComponent key={item} />
                ))}
            </div>
            <div ref={loadMoreRef} className="mt-4 text-center">
                {isLoading && <p className="text-gray-600 text-xl font-semibold">Chargement...</p>}
            </div>
        </div>
    );
};
