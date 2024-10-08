
import WrapperCard from "../ui/main/card";
import { GetTopicCard } from "../actions/requests";
export default async function MainPage({ searchParams }) {
    const posts = await GetTopicCard();

    return (
        <>
            {Object.keys(posts).map((category) => {
                const categoryPosts = posts[category];
                return (
                    <WrapperCard posts={categoryPosts} query={searchParams.query} category={category} />
                );
            })}
        </>
    );
}