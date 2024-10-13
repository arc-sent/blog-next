import WrapperCard from "../main/card";
import { GetTopicCard } from "@/app/actions/requests";
export default async function MainPageComponent({ searchParams }) {
    const posts = await GetTopicCard();
    return (
        <>
            {Object.keys(posts).map((category) => {
                const categoryPosts = posts[category];
                return (
                    <WrapperCard posts={categoryPosts} query={searchParams.query} category={category} style={{ borderRadius: "10px" }} />
                );
            })}
        </>
    )

}