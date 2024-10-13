import Link from 'next/link';
import './main.scss';

export default function WrapperCard({ posts, query, category }) {
    const filteredPosts = query ? posts.filter(item => item.name.includes(query)) : posts;

    return (
        <div style={filteredPosts.length > 0 ? { marginTop: '25px' } : undefined} className='wrapp'>
            {
                filteredPosts.length > 0 &&
                <>
                    <h2>{category}</h2>
                    <div className='gridCard'>
                        {
                            filteredPosts.map(item => {
                                return (
                                    <div className="gridContainer">
                                        <Link href={`/main/${item.id}`}>
                                            <div style={{ backgroundImage: `url(${item.image})` }} className="card">
                                                <div className="mask">
                                                    <h1>{item.name}</h1>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            }
        </div>
    )
}