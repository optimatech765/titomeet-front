import React, { FC } from 'react';

interface Props {
    title: string;
    children: React.ReactNode;

}

const InputContainerComponent: FC<Props> = ({ title, children }) => {
    return (
        <div className='md:grid grid-cols-6 gap-5 w-full'>
            <div className='col-span-2'>
                <label className='text-sm font-medium text-gray-700'>{title}</label>

            </div>
            <div className='col-span-4'>
                {children}
            </div>

        </div>
    );
}

export default InputContainerComponent;

export const InputContainerComponent2: FC<Props> = ({ title, children }) => {
    return (
        <div className='md:grid grid-cols-12 gap-0 w-full'>
            <div className='col-span-2'>
                <label className='text-sm font-medium text-gray-700'>{title}</label>

            </div>
            <div className='col-span-10'>
                {children}
            </div>

        </div>
    );
}

export const InputContainerComponentTop: FC<Props> = ({ title, children }) => {
    return (
        <div className='space-y-2 w-full'>
            <div className='col-span-2'>
                <label className='text-sm font-medium text-gray-700'>{title}</label>

            </div>
            <div className='col-span-4'>
                {children}
            </div>

        </div>
    );
}

