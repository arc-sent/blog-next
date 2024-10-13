import { GetTopicCard, GetUser } from "@/app/actions/requests";
import { getToken } from "@/app/lib/session";
import PageId from "@/app/ui/page_id/page_id";

export default async function PageIdPost({ params }) {
    const { id_post } = params;
    const posts = await GetUser();
    const token = await getToken();
    const AllUser = await GetUser();
    const user = AllUser.find(item => item.id === token.userId);
    const post = user.posts.find(item => item.id === id_post);
    console.log(post);
    return (
        
        <PageId InfoPosts = {post}/>
    )
}