import React from 'react';
import { Layout } from 'antd';
import ContentLayout from '../ui/layout_component/content';
import FooterLayout from '../ui/layout_component/footer';
import HeaderProfile from '../ui/layout_component/header_profile';
import { getToken } from "@/app/lib/session";
export default function LayoutProfile({children}) {

    const token = getToken();
    return (
        <Layout>
            <HeaderProfile cook = {token}/>
            <ContentLayout>{children}</ContentLayout>
            <FooterLayout cook = {token}/>
        </Layout>
    )
}