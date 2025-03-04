'use client'
import { useState } from "react";

export const ChatFileUploader = () => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleSend = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            console.log("Fichier envoyé avec succès !");
            setFile(null);
            setPreview(null);
        } else {
            console.error("Erreur lors de l'envoi du fichier.");
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
            <input
                type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-100"
            />

            {preview && (
                <div className="mt-4">
                    {file?.type.startsWith("image/") ? (
                        <img src={preview} alt="Aperçu" className="w-40 h-40 object-cover rounded-lg" />
                    ) : (
                        <p className="text-gray-700">{file?.name}</p>
                    )}
                </div>
            )}

            <button
                onClick={handleSend}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Envoyer
            </button>
        </div>
    );
};

export const MultiImageUploader = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(event.target.files || []);
        if (selectedFiles.length > 0) {
            setFiles([...files, ...selectedFiles]);

            // Générer des aperçus pour chaque fichier
            const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
            setPreviews([...previews, ...newPreviews]);
        }
    };

    const removeImage = (index: number) => {
        const newFiles = files.filter((_, i) => i !== index);
        const newPreviews = previews.filter((_, i) => i !== index);
        setFiles(newFiles);
        setPreviews(newPreviews);
    };

    const handleSend = async () => {
        if (files.length === 0) return;

        const formData = new FormData();
        files.forEach((file) => formData.append("files", file));

        const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            console.log("Fichiers envoyés avec succès !");
            setFiles([]);
            setPreviews([]);
        } else {
            console.error("Erreur lors de l'envoi des fichiers.");
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
            <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-100"
            />

            {/* Aperçu des images */}
            <div className="mt-4 grid grid-cols-3 gap-2">
                {previews.map((src, index) => (
                    <div key={index} className="relative">
                        <img src={src} alt={`Preview ${index}`} className="w-24 h-24 object-cover rounded-lg" />
                        <button
                            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
                            onClick={() => removeImage(index)}
                        >
                            ❌
                        </button>
                    </div>
                ))}
            </div>

            <button
                onClick={handleSend}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
                disabled={files.length === 0}
            >
                Envoyer {files.length > 1 ? "les fichiers" : "le fichier"}
            </button>
        </div>
    );
};
