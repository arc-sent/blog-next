'use client'
import { Layout } from 'antd';
const { Footer } = Layout;
import './layout_component.scss'

export default function FooterLayout({ children }) {
    return <Footer className='footer'>{ children }</Footer>
}