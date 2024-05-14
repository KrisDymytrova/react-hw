import { Component } from 'react';
import PropTypes from 'prop-types';

class PostCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            error: null
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await res.json();
            this.setState({ posts, loading: false });
        } catch (error) {
            console.error('Ошибка при получении статей', error);
            this.setState({ error: 'Ошибка при загрузке данных', loading: false });
        }
    }

    render() {
        const { posts, loading, error } = this.state;

        return (
            <div className="posts">
                {loading ? (
                    <p>Загрузка статей...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : posts.length === 0 ? (
                    <p>Нет доступных статей</p>
                ) : (
                    <ul className="posts__list">
                        {posts.map(post => (
                            <li key={post.id} className="posts_single-post" data-post-id={post.id}>
                                <h3 className="posts__post-title">{post.title}</h3>
                                <p className="posts__post-description">{post.body}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

PostCatalog.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })),
    loading: PropTypes.bool.isRequired
};

export default PostCatalog;