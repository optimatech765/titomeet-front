
import { useState } from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
    maxStars?: number;
    onRate?: (rating: number) => void;
}

export const RaitingComponent = ({ maxStars = 5, onRate }: RatingProps) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (index: number) => {
        setRating(index);
        if (onRate) onRate(index);
    };

    const getStarIcon = (index: number) => {
        const isActive = index <= (hover || rating);
        return (
            <Star
                className={`w-7 h-7 transition-transform duration-150 transform ${isActive ? 'text-red-500 scale-110' : 'text-gray-400'
                    }`}
            />
        );
    };

    return (
        <div className="flex space-x-1">
            {Array.from({ length: maxStars }, (_, i) => {
                const index = i + 0.5;
                return (
                    <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(0)}
                    >
                        {getStarIcon(index)}
                    </div>
                );
            })}
        </div>
    );
}

