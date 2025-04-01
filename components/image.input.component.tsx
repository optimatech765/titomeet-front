/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import InputContainerComponent from './create-event/input.container.component';

const ImageInputComponent = ({ title, onChange, value }: { onChange: (a: File) => void, title: string, value: any }) => {

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Génère une URL temporaire pour l'aperçu
            setImagePreview(imageUrl);
            onChange(file);
        }
    };

    useEffect(() => {
        if (value) {
            setImagePreview(URL.createObjectURL(value));
        }
    }, [value]);

    return (
        <div
        >
            <input id={title} type="file" className="hidden" onChange={(e: any) => {
                handleFileChange(e)
                onChange(e.target.files[0])
            }} />
            <label htmlFor={title} className="flex gap-2.5 " >
                <InputContainerComponent title={title} >
                    <div
                        style={{
                            backgroundImage: imagePreview ? `url(${imagePreview})` : "none",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            position: "relative",
                        }}
                        className=" w-[300px] flex items-center justify-center  rounded-md border-2 border-solid border-gray-300 p-6 text-center text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                        {/* <Image className=" h-10" />
                        <span className="block text-sm text-gray-700">
                            Ajouter une image
                        </span> */}
                        {imagePreview && (
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-400 bg-opacity-50 text-black text-sm'>
                            </div>
                        )}

                        <Image className="h-16 z-50" />
                        <span className="block text-base text-black z-50">Ajouter une image</span>

                    </div>
                </InputContainerComponent>
            </label>
        </div>
    );
}

export default ImageInputComponent;
