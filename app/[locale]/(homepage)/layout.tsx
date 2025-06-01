"use client"
import { FooterSection } from '@/sections/footer.section';
import { NavbarSection } from '@/sections/navbar.section';
import { useUserInfoStore } from '@/stores/userinfo.store';
import React, { useEffect } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { fetchUserInfo } = useUserInfoStore();
    useEffect(() => {
        fetchUserInfo();

    }, []);
    return (
        <>

            {/* navbar */}
            {/* {(!isLoading && userInfo?.id) ? <AuthentificatedNavbarSection /> : <NavbarSection />} */}
            <NavbarSection />


            {/* main */}
            <main className='min-h-[75vh]' >

                {children}

            </main>

            {/* <SwitchThemeComponent /> */}

            {/* footer */}
            <FooterSection />

        </>
    );
}

export default Layout;
