import CardPost from "@/app/ui/card_component/card_post";
import { GetTopicCard } from "../../actions/requests";
import './id_style.scss';
import { FaBookBookmark } from "react-icons/fa6";
import Link from "next/link";

export default async function PageCard({ params }) {

    const posts = await GetTopicCard();
    let InfoCard;

    Object.keys(posts).map((category) => {
        const categoryPosts = posts[category];
        InfoCard = categoryPosts.find(item => item.id == params.id) || InfoCard
    });

    return (
        <>
            <div className="main-block">
                <img src={InfoCard.collage} alt={InfoCard.id} />
                <div className="main-info-block">
                    <h1>{InfoCard.name}</h1>
                    <p>Статей по теме: {InfoCard.posts.length}</p>
                </div>

            </div>

            <div className="content-card">
                <div className="title-content-card">
                    <FaBookBookmark style={{ fontSize: "20px" }} />
                    <h1>Статьи</h1>
                </div>

                <div className='grid-container'>
                    {
                        InfoCard.posts.map(post => {
                            return <Link href={`/main/${params.id}/${post.id}`} key={post.id}><CardPost post={post} /></Link>
                        })
                    }
                </div>

            </div>
        </>

    )
}