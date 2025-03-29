import React, { Fragment } from 'react';
import { LoadingComponent2 } from './loading.component';

import { Card, Skeleton } from "@heroui/react";

interface AwaitDataLoaderProps {
    isLoading: boolean,
    children: React.ReactNode,
    emptyMessage: React.ReactNode,
    dataLength: number
}
export const AwaitDataLoader = ({ isLoading, children, emptyMessage, dataLength }: AwaitDataLoaderProps) => {
    return (
        <Fragment>
            {isLoading ? <>
                <LoadingComponent2 />
            </> : <>
                {dataLength === 0 ? emptyMessage : children}
            </>}
        </Fragment>
    );
}



export const AwaitDataLoaderStats = ({ isLoading, children, emptyMessage, dataLength }: AwaitDataLoaderProps) => {
    return (
        <Fragment>
            {isLoading ? <>
                <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-6">
                    {[...Array(4)].map((_, index) => (
                        <Card className="w-[200px] space-y-5 p-4" radius="lg" key={index}>
                            <Skeleton className="rounded-lg">
                                <div className="h-24 rounded-lg bg-default-300" />
                            </Skeleton>
                            <div className="space-y-3">
                                <Skeleton className="w-3/5 rounded-lg">
                                    <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                                </Skeleton>
                                <Skeleton className="w-4/5 rounded-lg">
                                    <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                                </Skeleton>
                                <Skeleton className="w-2/5 rounded-lg">
                                    <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                                </Skeleton>
                            </div>
                        </Card>
                    ))}
                </section>
            </> : <>
                {dataLength === 0 ? emptyMessage : children}
            </>}

        </Fragment>
    );
}

