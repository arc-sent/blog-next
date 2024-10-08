import './card_post.scss';

export default function CardPost({ post }) {

    function TruncateText(text, wordLimit) {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + '...';
        }
        return text;
    }

    return (
        <div className='card_post'>
            <img src={post.image} />
            
            <div className='short_info_card'>
                <h2>{post.title}</h2>
                <p>{TruncateText(post.text, 10)}</p>
            </div>

        </div>
    )
}