import { Image } from 'lucide-react';
import React from 'react';

const ImageInputComponent = ({title}:{title:string}) => {
    return (
        <div>
            <input type="file" className="hidden" />
            <label htmlFor="file-upload" className="flex gap-2.5 ">
                <span className="text-sm text-gray-600 block min-w-fit">{title}</span>
                <div className="inline-block w-[300px] flex  rounded-md border-2 border-solid border-gray-300 p-6 text-center text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                    <Image className="w-10 h-10 mx-auto" />
                    <span className="block text-sm text-gray-700">
                       Ajouter une image
                    </span>
                </div>
            </label>
        </div>
    );
}

export default ImageInputComponent;
