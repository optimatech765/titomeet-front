"use client"
import { AdminTableComponent } from '@/components/tables/admin.table.component';
import { useAdminEventsStore } from '@/stores/admin/admin.events.store';
import React from 'react';
import {useEffect} from 'react';

export const EventsList = () => {
    const { columnsValue, valueList, isLoading ,fetchList} = useAdminEventsStore();

    useEffect(() => {
        fetchList()
         
    }, []);
    return (
        <section>
            <AdminTableComponent
                isLoading={isLoading}
                title={"Liste des Evènements"}
                columns={columnsValue}
                valuesList={valueList}
                emptyContent={<p className="text-center text-gray-500">Aucun évènement trouvé</p>}
            />
        </section>
    );
}




