import PageId from "@/app/ui/page_id/page_id";
import { GetTopicCard } from "../../../actions/requests";
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
        <PageId InfoPosts = {InfoPosts}/>
    )
}