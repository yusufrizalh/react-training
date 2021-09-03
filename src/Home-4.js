import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum dolor amet...', author: 'yusuf', id: 1 },
        { title: 'Welcome aboard!', body: 'lorem ipsum dolor amet...', author: 'rizal', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum dolor amet...', author: 'yusuf', id: 3 },
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'yusuf')} title="Yusuf's blogs" />
        </div>
    );
}
 
export default Home;