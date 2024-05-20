import { Footer }from '../../Components/Footer/Footer';
import './Home.css';

export const Home = () => {
    return ( <>
        <h1>Welcome to English Training</h1>
        <p>Select English level of sentences</p>
        <section className='levelsSection'>
            <a href="/easy"><button className='levelsButtons'>Easy</button></a>
            <a href="/hard"><button className='levelsButtons'>Hard</button></a>
            <a href="/complex"><button className='levelsButtons'>Complex</button></a>
        </section>
        <Footer />
    </>);
}