import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum dolor amet...', author: 'yusuf', id: 1 },
        { title: 'Welcome aboard!', body: 'lorem ipsum dolor amet...', author: 'rizal', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum dolor amet...', author: 'yusuf', id: 3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('useEffect is here');
    }, []);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;