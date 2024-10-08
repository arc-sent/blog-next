import './profile_component.scss';
import { FaBookBookmark } from "react-icons/fa6";
import CardPost from "@/app/ui/card_component/card_post";
import Link from 'next/link';

export default function ProfileComponent({ user }) {
    return (
        <div className="wrapper-component-profile">
            <div className="main-block">
                <div className="bg" style={{ background: user.bg }}></div>

                <div className="main-info-block">
                    <h1>{user.name}</h1>
                    <Link href = '/profile/create'><button>Создать статью</button></Link>
                </div>

            </div>

            <div className="content-card">
                <div className="title-content-card">
                    <FaBookBookmark style={{ fontSize: "20px" }} />
                    <h1>Ваши статьи</h1>
                </div>

                <div className='grid-container'>
                    {
                        user.posts.map(post => {
                            return <Link href={`/main/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}><CardPost post={post} /></Link>
                        })
                    }
                </div>

            </div>
        </div>

    )
}