import { Card, CardBody } from "@heroui/react";

export const ProvidersState = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {stats.map((stat, index) => (
                <Card key={index} className="border-1">
                    <CardBody>
                        <p className="text-gray-500 text-center">{stat.title}</p>
                        <p className="text-2xl font-bold text-center">{stat.value}</p>
                    </CardBody>
                </Card>
            ))}
        </section>
    );
};

const stats = [
    { title: "Demandes en attente", value: "2152" },
    { title: "Prestataires actifs", value: "2152" },
];