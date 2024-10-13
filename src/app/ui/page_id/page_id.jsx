'use client'
import { useEffect } from 'react';
import './page_id.scss';

export default function PageId({ InfoPosts }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ marginTop: '25px' }}>
            <h1>{InfoPosts.title}</h1>
            <p>{InfoPosts.text}</p>
        </div>
    );
}
