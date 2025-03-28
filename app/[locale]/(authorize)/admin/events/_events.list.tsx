import { AdminTableComponent } from '@/components/tables/admin.table.component';
import React from 'react';

export const EventsList = () => {
    return (
        <section>
            <AdminTableComponent
                title={"Liste des Evènements"}
                columns={columns}
                valuesList={valuesList}
                emptyContent={<p className="text-center text-gray-500">Aucun évènement trouvé</p>}
            />
        </section>
    );
}

const columns = [
    { name: "Date", uid: "date", sortable: true },
    { name: "Evènement", uid: "event", sortable: true },
    { name: "CATEGORIE", uid: "category", sortable: true },
    { name: "ORGANISATEUR", uid: "organisation", sortable: true },
    { name: "PARTICIPANTS", uid: "participants", sortable: true },
    { name: "Statut", uid: "status", sortable: true },
    { name: "ACTIONS", uid: "actions", sortable: false },
];

const valuesList = [
    {
        id: 1,
        date: "2025-03-10",
        event: "Conférence Tech",
        category: "Tech",
        organisation: "Tito",
        participants: "10",
        status: "active"
    },
    {
        id: 2,
        date: "2025-03-11",
        event: "Atelier Blockchain",
        category: "Blockchain",
        organisation: "Tito",
        participants: "10",
        status: "paused"
    },
    {
        id: 3,
        date: "2025-03-12",
        event: "Séminaire IA",
        category: "IA",
        organisation: "Tito",
        participants: "10",
        status: "vacation"
    }
]

