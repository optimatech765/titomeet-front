import React, { ReactNode } from 'react';
import { EventDashboardLayout } from './content';

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <EventDashboardLayout>
                {children}
            </EventDashboardLayout>
        </>
    );
}

export default Layout;
