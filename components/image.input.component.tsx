/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image } from 'lucide-react';
import React from 'react';
import InputContainerComponent from './create-event/input.container.component';

const ImageInputComponent = ({ title, onChange }: { onChange: (a: File) => void, title: string }) => {
    return (
        <div>
            <input id={title} type="file" className="hidden" onChange={(e: any) => {
                console.log(e.target.files[0])
                onChange(e.target.files[0])
            }} />
            <label htmlFor={title} className="flex gap-2.5 ">
                <InputContainerComponent title={title} >
                    <div className=" w-[300px] flex items-center justify-center  rounded-md border-2 border-solid border-gray-300 p-6 text-center text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                        <Image className=" h-10" />
                        <span className="block text-sm text-gray-700">
                            Ajouter une image
                        </span>
                    </div>
                </InputContainerComponent>
            </label>
        </div>
    );
}

export default ImageInputComponent;
