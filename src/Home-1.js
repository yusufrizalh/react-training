const Home = () => {
    const handleClick = (e) => {
        console.log('hello, inixindo', e);
    }
    const handleClickParam = (name, e) => {
        console.log('hello, ' + name, e.target);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {
                handleClickParam('rizal', e)
            }}>Click me param</button>
        </div>
     );
}
 
export default Home;