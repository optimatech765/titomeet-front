import { UserAuthWrapper } from '@/context';
import { AuthentificatedNavbarSection } from '@/sections/authentificated.navbar.section';
import { FooterSection } from '@/sections/footer.section';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>


            {/* navbar */}
            <AuthentificatedNavbarSection />


            {/* main */}
            <main >

                <UserAuthWrapper>
                    {children}
                </UserAuthWrapper>

            </main>

            {/* footer */}
            <FooterSection />

        </>
    );
}

export default Layout;
