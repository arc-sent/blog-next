'use client'
import { Layout } from 'antd';
const { Header } = Layout;
import './layout_component.scss';
import Logo2 from '../../image/Logo2.png';
import Image from 'next/image';
import CreatedFormHeader from '../header_component/created_from_header';
import UserIcon from '../header_component/user_icon';
import { useRouter } from 'next/navigation';


export default function HeaderLayout({ cook }) {
    const router = useRouter();

    const handleDeleteSession = async () => {
        const response = await fetch('/api/delete_session', {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log('Session deleted');
            router.refresh();
        } else {
            console.error('Failed to delete session');
        }
    };
    return (
        <Header className='header'>
            <Image src={Logo2} alt='LOGO' height={50} width={50} onClick={() => handleDeleteSession()} />
            <CreatedFormHeader />
            <UserIcon cook={cook} />
        </Header>)
}