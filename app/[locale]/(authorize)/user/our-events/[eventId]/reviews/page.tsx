'use client';
import { EmptyDateComponent } from "@/components/empty.date.component";
import { useScopedI18n } from "@/locales/client";
import {
    Card,
    CardBody,
    Avatar,
    Divider,
    Input,
    Select,
    SelectItem
} from "@heroui/react";
import { Star, Search, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Review = {
    id: number;
    name: string;
    avatarUrl: string;
    comment: string;
    rating: number;
    date: string;
};

const reviews: Review[] = [
    {
        id: 1,
        name: "Sophie Dupont",
        avatarUrl: "/avatars/sophie.jpg",
        comment: "Excellent service, rapide et efficace. Je recommande vivement !",
        rating: 5,
        date: "2025-05-30",
    },
    {
        id: 2,
        name: "Jean Martin",
        avatarUrl: "/avatars/jean.jpg",
        comment: "Bonne expérience globale, quelques points à améliorer.",
        rating: 4,
        date: "2025-05-28",
    },
    {
        id: 3,
        name: "Fatou Ndiaye",
        avatarUrl: "/avatars/fatou.jpg",
        comment: "Très satisfait, équipe très professionnelle.",
        rating: 5,
        date: "2025-05-26",
    },
    {
        id: 4,
        name: "Ali Traoré",
        avatarUrl: "/avatars/ali.jpg",
        comment: "Service moyen, il y a eu un retard de livraison.",
        rating: 2,
        date: "2025-05-20",
    },
];

const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                fill={i < rating ? "currentColor" : "none"}
            />
        ))}
    </div>
);

function Page() {
    const [search, setSearch] = useState("");
    const [selectedStars, setSelectedStars] = useState<string | null>(null);
    const router = useRouter();

    const filteredReviews = reviews.filter((review) => {
        const matchSearch =
            review.name.toLowerCase().includes(search.toLowerCase()) ||
            review.comment.toLowerCase().includes(search.toLowerCase());

        const matchStars =
            !selectedStars || review.rating === parseInt(selectedStars);

        return matchSearch && matchStars;
    });

    const eventT = useScopedI18n("event");

    return (
        <main className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-black flex items-center gap-2 mb-3">
                <ChevronLeft className="text-black cursor-pointer " onClick={() => router.back()} />
                {eventT("userOpinion")}
            </h2>
            <h1 className="text-3xl font-bold mb-6">Avis des utilisateurs</h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Input
                    isClearable
                    variant="bordered"
                    label="Rechercher"
                    placeholder="Nom ou commentaire"
                    startContent={<Search className="text-gray-500 w-4 h-4" />}
                    value={search}
                    onValueChange={setSearch}
                    className="w-full sm:w-1/2"
                />

                <Select
                    label="Filtrer par étoiles"
                    variant="bordered"
                    className="w-full sm:w-1/3"
                    selectedKeys={selectedStars ? [selectedStars] : []}
                    onChange={(e) => setSelectedStars(e.target.value || null)}

                >
                    <SelectItem key="">Toutes les notes</SelectItem>

                </Select>
            </div>

            <div className="space-y-2">
                {filteredReviews.length === 0 ? (
                    <EmptyDateComponent />
                ) : (
                    filteredReviews.map((review) => (
                        <div key={review.id}>
                            <Card className="w-full shadow-md hover:shadow-lg transition-all">
                                <CardBody>
                                    <div className="flex items-center gap-4 mb-3">
                                        <Avatar src={review.avatarUrl} alt={review.name} />
                                        <div>
                                            <span className="font-semibold">{review.name}</span>
                                            <p >
                                                {new Date(review.date).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className="mt-3">
                                        <span className="text-sm text-gray-700">
                                            {review.comment}
                                        </span>
                                        <div className="mt-2">
                                            <RatingStars rating={review.rating} />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}
export default Page;



