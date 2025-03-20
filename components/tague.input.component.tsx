"use client";

import { useState } from "react";

interface TagTextareaProps {
    maxTags?: number;
    tags: string[];
    onChange: (tags: string[]) => void;
}
export const TagTextarea = ({ maxTags = 5, tags = [], onChange }: TagTextareaProps) => {
    // const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    // Ajout d'un tag
    const addTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            event.preventDefault();
            const newTag = inputValue.trim();

            if (tags.length >= maxTags) return;
            if (!tags.includes(newTag)) {
                onChange([...tags, newTag]);
            }
            setInputValue("");
        }
    };

    // Suppression d'un tag
    const removeTag = (index: number) => {
        onChange(tags.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full min-h-[80px]">
            <div className="flex h-full flex-wrap items-center border border-gray-300 rounded-md p-2 space-x-2">
                <div className="flex flex-wrap items-center gap-2 h-full">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="flex items-center text-primary bg-[#FACCCF] px-2 py-1 rounded-full text-sm"
                        >
                            <span>{tag}</span>
                            <button
                                type="button"
                                className="ml-2 text-primary"
                                onClick={() => removeTag(index)}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder="Tagues"
                    className="flex-1 border-none outline-none focus:ring-0 h-full"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={addTag}
                />
            </div>
            {tags.length >= maxTags && (
                <p className="mt-2 text-sm text-red-500">You can only add up to {maxTags} tags.</p>
            )}
        </div>
    );
};
