
import React from 'react';
import { Metadata } from 'next';
import { Loginpage } from './_loginpage';

export const metadata: Metadata = {
    title: "TitoMee - Connexion",
    description: '...',
  }

const Page = () => {
    return (
        <>
        <Loginpage />
        </>
    );
}

export default Page;
