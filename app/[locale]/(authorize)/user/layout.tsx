import { UserAuthWrapper } from '@/context';
import { AuthentificatedNavbarSection } from '@/sections/authentificated.navbar.section';
import { FooterSection } from '@/sections/footer.section';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <UserAuthWrapper>

                {/* navbar */}
                <AuthentificatedNavbarSection />


                {/* main */}
                <main >


                    {children}


                </main>

                {/* footer */}
                <FooterSection />
            </UserAuthWrapper>
        </>
    );
}

export default Layout;
