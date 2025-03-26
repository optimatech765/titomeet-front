"use client";
import { DashLayout } from "@/sections/dashboard.layout";
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <DashLayout>
            {children}
        </DashLayout>
    );
}

export default Layout;
