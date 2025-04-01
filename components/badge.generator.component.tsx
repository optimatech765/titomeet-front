/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@heroui/button';
import React, { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Image as KonvaImage, Transformer } from 'react-konva';
import Konva from 'konva';
import { Card, Input } from '@heroui/react';

export const BadgeGenerator = ({imageUrl}: {imageUrl: string}) => {
    const [badgeImage, setBadgeImage] = useState<HTMLImageElement | null>(null);
    const [uploadedImage, setUploadedImage] = useState<{
        image: HTMLImageElement;
        x: number;
        y: number;
        width: number;
        height: number;
        rotation: number;
    } | null>(null);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const stageRef = useRef<Konva.Stage>(null);
    const layerRef = useRef<Konva.Layer>(null);
    const transformerRef = useRef<Konva.Transformer>(null);
    const imageRef = useRef<Konva.Image>(null);

    const stageWidth = 350;
    const stageHeight = 500;

    // Charger l'image du badge
    useEffect(() => {
        const image = new window.Image();
        image.src = imageUrl;
        image.crossOrigin = 'Anonymous';
        image.onload = () => {
            setBadgeImage(image);
        };

        return () => {
            image.onload = null;
        };
    }, []);

    // Mise à jour du transformer quand l'image sélectionnée change
    useEffect(() => {
        if (!transformerRef.current || !imageRef.current) return;

        if (selectedId === 'uploaded-image') {
            transformerRef.current.nodes([imageRef.current]);
            transformerRef.current.getLayer()?.batchDraw();
        } else {
            transformerRef.current.nodes([]);
            transformerRef.current.getLayer()?.batchDraw();
        }
    }, [selectedId]);

    const handleDownload = () => {
        setSelectedId(null);


        setTimeout(() => {
            if (!stageRef.current) return;

            const uri = stageRef?.current.toDataURL({
                pixelRatio: 2,
                quality: 1,
                mimeType: 'image/png'
            });

            const link = document.createElement('a');
            link.download = 'badge.png';
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 10);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new window.Image();
            img.src = event.target?.result as string;
            img.onload = () => {
                setUploadedImage({
                    image: img,
                    x: 0,
                    y: 0,
                    width: stageWidth,
                    height: stageHeight,
                    rotation: 0
                });
                setSelectedId(null); // Désélectionner après un nouvel upload
            };
        };
        reader.readAsDataURL(file);
    };

    const handleImageDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
        if (!uploadedImage) return;

        setUploadedImage({
            ...uploadedImage,
            x: e.target.x(),
            y: e.target.y()
        });
    };

    const handleTransformEnd = (e: Konva.KonvaEventObject<Event>) => {
        if (!uploadedImage || !imageRef.current) return;

        const node = imageRef.current;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();

        setUploadedImage({
            ...uploadedImage,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(5, node.height() * scaleY),
            rotation: node.rotation()
        });

        // Réinitialiser l'échelle pour éviter des problèmes cumulatifs
        node.scaleX(1);
        node.scaleY(1);
    };

    return (
        <Card className="flex flex-col items-center gap-4 p-4">
            <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="p-2 border rounded"
            />

            <Stage
                width={stageWidth}
                height={stageHeight}
                ref={stageRef}
                className="border shadow-lg"
                onClick={(e) => {
                    // Désélectionner si on clique sur un espace vide
                    if (e.target === e.currentTarget) {
                        setSelectedId(null);
                    }
                    // Déselectionner si on finit de déplacer l'image
                    if (e.target === imageRef.current) {
                        setSelectedId(null);
                    }

                    // Déselectionner après avoir déplacé l'image
                    if (e.target === imageRef.current && selectedId) {
                        setSelectedId(null);
                    }

                }}
            >
                <Layer ref={layerRef}>
                    {/* Image uploadée en arrière-plan mais manipulable */}
                    {uploadedImage && (
                        <KonvaImage
                            ref={imageRef}
                            image={uploadedImage.image}
                            x={uploadedImage.x}
                            y={uploadedImage.y}
                            width={uploadedImage.width}
                            height={uploadedImage.height}
                            rotation={uploadedImage.rotation}
                            draggable
                            onDragEnd={handleImageDragEnd}
                            onTransformEnd={handleTransformEnd}
                            onClick={(e) => {
                                e.cancelBubble = true; // Empêche l'événement de remonter au stage
                                setSelectedId('uploaded-image');
                            }}
                            onTap={(e) => {
                                e.cancelBubble = true;
                                setSelectedId('uploaded-image');
                            }}
                        />
                    )}

                    {/* Image du badge par-dessus */}
                    {badgeImage && (
                        <KonvaImage
                            image={badgeImage}
                            x={0}
                            y={0}
                            width={stageWidth}
                            height={stageHeight}
                            listening={false} // Désactive les interactions sur le badge
                        />
                    )}

                    <Transformer
                        ref={transformerRef}
                        boundBoxFunc={(oldBox, newBox) => {
                            if (newBox.width < 5 || newBox.height < 5) {
                                return oldBox;
                            }
                            return newBox;
                        }}
                    />
                </Layer>
            </Stage>

            <div className="flex gap-2">


                <Button
                    onPress={handleDownload}
                    className="px-6 py-2 bg-primary text-white rounded w-full transition-colors"
                >
                    Télécharger le badge
                </Button>
            </div>
        </Card>
    );
};