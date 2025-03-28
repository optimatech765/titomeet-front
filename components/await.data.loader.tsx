import React, { Fragment } from 'react';
import { LoadingComponent2 } from './loading.component';

interface AwaitDataLoaderProps {
    isLoading: boolean,
    children: React.ReactNode,
    emptyMessage: React.ReactNode,
    dataLength: number
}
const AwaitDataLoader = ({ isLoading, children, emptyMessage, dataLength }:AwaitDataLoaderProps) => {
    return (
        <Fragment>
            {isLoading ? <>
                <LoadingComponent2 />
            </> : <>
            {dataLength === 0? emptyMessage:children}
            </>}
        </Fragment>
    );
}

export default AwaitDataLoader;
