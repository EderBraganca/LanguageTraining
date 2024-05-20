import { Footer }from '../../Components/Footer/Footer';

export const Home = () => {
    return ( <>
        <h1>Home</h1>
        <p>Select your Level</p>
        <button><a href="/easy">Easy</a></button>
        <button><a href="/hard">Hard</a></button>
        <button><a href="/complex">Complex</a></button>
        <Footer />
    </>);
}