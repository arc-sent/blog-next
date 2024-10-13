'use client'
import { Layout } from 'antd';
const { Header } = Layout;
import './layout_component.scss';
import Logo2 from '../../image/Logo2.png';
import Image from 'next/image';
import UserIcon from '../header_component/user_icon';

export default function HeaderProfile({ cook }) {
   

    return (
        <Header className='header'>
            <Image src={Logo2} alt='LOGO' height={50} width={50} />
            <UserIcon cook={cook}/>
        </Header>
    )
}