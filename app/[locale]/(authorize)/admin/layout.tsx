"use client";
import { AdminAuthWrapper } from "@/context";
import { DashLayout } from "@/sections/dashboard.layout";
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AdminAuthWrapper>
            <DashLayout>
                {children}
            </DashLayout>
        </AdminAuthWrapper>

    );
}

export default Layout;
