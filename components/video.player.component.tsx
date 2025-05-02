'use client';

import { useState } from 'react';
import { PlayCircle } from 'lucide-react';

interface VideoPlayerProps {
  poster: string; // chemin de l'image de prévisualisation
  videoUrl: string; // lien vers la vidéo (YouTube, Vimeo ou fichier mp4)
}

export const VideoPlayer = ({ poster, videoUrl }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
   
    <div className="relative md:w-1/2 section-container  max-w-4xl mx-auto rounded-xl overflow-hidden aspect-video shadow-lg">
      {!isPlaying ? (
        <div className="w-full h-full relative cursor-pointer rounded-lg" onClick={() => setIsPlaying(true)}>
          <img src={poster} alt="Aperçu vidéo" className="w-full h-full object-cover " />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <PlayCircle className="w-16 h-16 text-white hover:scale-110 transition" />
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={`${videoUrl}?autoplay=1`}
          title="Vidéo"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
