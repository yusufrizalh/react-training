import { useState } from 'react';

const Home = () => {
    //let name = 'rizal';
    const [name, setName] = useState('rizal');
    const [age, setAge] = useState(30);

    const handleClick = () => {
        // name = 'yusuf';
        // console.log(name);
        setName('yusuf');
        setAge(25);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;