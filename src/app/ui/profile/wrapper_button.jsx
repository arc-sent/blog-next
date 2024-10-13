'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function WrapperButton() {
    const router = useRouter();

    const handleDeleteSession = async () => {
        const response = await fetch('/api/delete_session', {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log('Session deleted');
            router.push('/main');
            router.refresh();
        } else {
            console.error('Failed to delete session');
        }
    };

    return (
        <div className='wrapper-button'>
            <Link href='/profile/create'><button style={{ marginRight: '5px' }}>Создать статью</button></Link>
            <button onClick={() => handleDeleteSession()}>Выйти с аккаунта</button>
        </div>
    )
}