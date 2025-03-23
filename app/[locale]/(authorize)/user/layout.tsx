import { UserAuthWrapper } from '@/context';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <UserAuthWrapper>
                {children}
            </UserAuthWrapper>
        </div>
    );
}

export default Layout;
