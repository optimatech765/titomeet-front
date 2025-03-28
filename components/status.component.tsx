import { statusColorMap } from '@/utils/constantes';
import { Chip } from '@heroui/react';
import React from 'react';

export const StatusComponent = ({ status }: { status: string }) => {
    return (
        <div className="w-full flex justify-center">
            <div className=" mx-auto">
                <Chip
                    startContent={
                        <div className="bg-primary rounded-full min-w-2 min-h-2 "/>
                    }
                    className='items-center px-2'

                    color={statusColorMap[status]["color"]}
                    size="sm"
                    variant="flat"
                >
                    <span className=" font-semibold capitalize">
                        {statusColorMap[status]["text"]}
                    </span>

                </Chip>
            </div>
        </div>


    );
}