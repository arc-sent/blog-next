
import React from 'react';
import { Layout } from 'antd';
import HeaderLayout from "../ui/layout_component/header";
import ContentLayout from "../ui/layout_component/content";
import FooterLayout from "../ui/layout_component/footer";
import { getToken } from "@/app/lib/session";

export default function LayoutMain({ children }) {
    const token = getToken();

    return (
        
        <Layout>
            <HeaderLayout cook={token}/>
            <ContentLayout>{children}</ContentLayout>
            <FooterLayout cook={token}/>
        </Layout>

    )
}
