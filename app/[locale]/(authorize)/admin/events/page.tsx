import React, { Fragment } from 'react';
import { PageContent } from './_page.content';

const Page = () => {
    return (
        <Fragment>
            <h1 className="text-2xl font-extrabold text-gray-900">
                Evènements
            </h1>
            <PageContent />
        </Fragment>
    );
}

export default Page;
