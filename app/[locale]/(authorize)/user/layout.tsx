import { UserAuthWrapper } from '@/context';
import { SocketIoProvider } from '@/context/socket/provider';
import { AuthentificatedNavbarSection } from '@/sections/authentificated.navbar.section';
import { FooterSection } from '@/sections/footer.section';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <UserAuthWrapper>
                <SocketIoProvider>
                    {/* navbar */}
                    <AuthentificatedNavbarSection />
                    {/* main */}
                    <main className='min-h-[75vh]' >
                        {children}
                    </main>

                    {/* footer */}
                    <FooterSection />
                </SocketIoProvider>
            </UserAuthWrapper>
        </>
    );
}

export default Layout;
