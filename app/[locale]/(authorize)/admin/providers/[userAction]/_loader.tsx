"use client";

import { Card, Skeleton } from "@heroui/react";

export const DemandeSkeleton = () => {
    return (
        <div className="space-y-6 px-4 md:px-8 py-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-40 rounded-lg" />
            </div>

            {/* Infos utilisateur */}
            <Card shadow="sm" className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <Skeleton className="h-24 w-24 rounded-full" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="space-y-1">
                                <Skeleton className="h-3 w-28 rounded-lg" />
                                <Skeleton className="h-4 w-40 rounded-md" />
                            </div>
                        ))}
                    </div>
                </div>
            </Card>

            {/* Description */}
            <Card shadow="sm" className="p-6 space-y-4">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-48 rounded-md" />
                    <Skeleton className="h-3 w-full rounded-md" />
                    <Skeleton className="h-3 w-5/6 rounded-md" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-48 rounded-md" />
                    <Skeleton className="h-3 w-full rounded-md" />
                    <Skeleton className="h-3 w-5/6 rounded-md" />
                </div>
            </Card>

            {/* Documents */}
            <div className="space-y-4">
                <Skeleton className="h-6 w-48 rounded-md" />
                <Card shadow="sm" className="p-4">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center justify-between py-2">
                            <Skeleton className="h-4 w-40 rounded-md" />
                            <Skeleton className="h-4 w-6 rounded-full" />
                        </div>
                    ))}
                </Card>
            </div>

            {/* Boutons */}
            <div className="flex justify-end gap-4 mt-6">
                <Skeleton className="h-10 w-32 rounded-full" />
                <Skeleton className="h-10 w-32 rounded-full" />
            </div>
        </div>
    );
}
