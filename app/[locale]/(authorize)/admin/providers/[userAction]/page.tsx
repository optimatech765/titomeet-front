"use client"
import { useParams } from 'next/navigation';
import React from 'react';
import { DetailsDemande } from './_provider.details.page';

const Page = () => {
    const { userAction } = useParams();
    return (
        <div>
            {userAction == "new" ?
                <>
                    NEW
                </> :
                <>
                    <DetailsDemande />
                </>

            }

        </div>
    );
}

export default Page;
