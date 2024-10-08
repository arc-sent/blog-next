'use client'
import { Layout } from 'antd';
const { Content } = Layout;
import './layout_component.scss'

export default function ContentLayout({ children }) {
    return (<Content className='content'>{children}</Content>)
}