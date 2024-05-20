import { Footer }from '../../Components/Footer/Footer';
import './Home.css';

export const Home = () => {
    return ( <>
        <h1>Welcome to English Training</h1>
        <p>Select English level of sentences</p>
        <section className='levelsSection'>
            <button className='levelsButtons'><a href="/easy">Easy</a></button>
            <button className='levelsButtons'><a href="/hard">Hard</a></button>
            <button className='levelsButtons'><a href="/complex">Complex</a></button>
        </section>
        <Footer />
    </>);
}