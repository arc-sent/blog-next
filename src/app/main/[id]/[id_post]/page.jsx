import { GetTopicCard } from "../../../actions/requests";
import '../id_style.scss';
export default async function PageIdPost({ params }) {
    const { id_post } = params;
    const posts = await GetTopicCard();
    let InfoCard;
    let InfoPosts;
    Object.keys(posts).map(category => {
        const CategoryPosts = posts[category];
        if (InfoCard) {
            InfoPosts = InfoCard.posts.find(post => post.id === id_post) || InfoPosts
        }
        InfoCard = CategoryPosts.find(item => item.id == params.id) || InfoCard
    })
    return (
        <div className="page_id_post">
            <h1>{InfoPosts.title}</h1>
            <p>{InfoPosts.text}</p>
        </div>
    )
}