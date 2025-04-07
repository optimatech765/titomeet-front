/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Upload } from 'lucide-react';
import React, { useState } from 'react';

export const FilePreviewComponent = ({ title, onChange }: { title: string, onChange: (e: File) => void }) => {
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [fileType, setFileType] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        onChange(file)
        const url = URL.createObjectURL(file);
        setFileUrl(url);
        setFileType(file.type);
    };

    return (
        <div className="space-y-1.5">
            <p>{title}</p>
            <label className="border-2 justify-center border-dashed flex gap-3 bg-slate-200  border-gray-300 rounded-lg p-6 text-center text-gray-500 cursor-pointer">
                <Upload size={24} className=" mb-2" />
                Glissez-déposez vos fichiers ici ou cliquez pour les importer
                <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="mb-2 hidden"
                />
            </label>

            {/* {fileUrl && fileType && (
                <div className="border rounded p-2 h-32">
                    {fileType.startsWith("image/") ? (
                        <img
                            src={fileUrl}
                            alt="Preview"
                            className="max-w-full max-h-[400px] mx-auto"
                        />
                    ) : fileType === "application/pdf" ? (
                        <iframe
                            src={fileUrl}
                            title="PDF Preview"
                            className="w-full h-[500px]"
                        />
                    ) : (
                        <p>File type not supported for preview.</p>
                    )}
                </div>
            )} */}
        </div>
    );
};

