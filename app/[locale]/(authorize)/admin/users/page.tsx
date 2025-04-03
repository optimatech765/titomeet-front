"use client"
import { AdminTableComponent } from '@/components/tables/admin.table.component';
import React, { useEffect } from 'react';
import { UsersState } from './users.state';
import { useUserStore } from '@/stores/admin/admin.users.store';

const Page = () => {

    const { users, columnsValue, fetchUsers } = useUserStore();

    useEffect(() => {
        fetchUsers({});
    }, []);

    return (
        <div>
            <section>
                <UsersState />
            </section>

            <section>
                <AdminTableComponent
                    title={"Liste des utilisateurs"}
                    columns={columnsValue}
                    valuesList={users}
                    emptyContent={<p className="text-center text-gray-500">Aucun utilisateur trouvé</p>}
                />
            </section>
        </div>
    );
}

export default Page;


