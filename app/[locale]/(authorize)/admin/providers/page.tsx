"use client"
import React, { useEffect } from 'react';
import { ProvidersState } from './_providers.state';
import { AdminTableComponent } from '@/components/tables/admin.table.component';
import { useProvidersStore } from '@/stores/providers.store';

const Page = () => {
    const {columnsValue, dataList, fetchProvidersList } = useProvidersStore();

    useEffect(() => {
        fetchProvidersList();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-extrabold text-gray-900">
                Prestataires
            </h1>
            <section>
                <ProvidersState />
            </section>

            <section>
                <AdminTableComponent
                    title={"Liste des Prestataires"}
                    columns={columnsValue}
                    valuesList={dataList}
                    emptyContent={<p className="text-center text-gray-500">Aucun prestataire trouvé</p>}
                />
            </section>

        </div>
    );
}

export default Page;
