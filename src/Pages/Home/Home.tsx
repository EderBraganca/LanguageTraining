import { Footer } from '../../Components/Footer/Footer';
import './Home.css';

export const Home = () => {
    return (<>
        <section className='mainSection'>
            <img src='Last.png' alt="Logo" className='logo' />
            <p>Select English level of sentences</p>
            <section className='levelsSection'>
                <a href="/easy"><button className='levelsButtons'>Easy</button></a>
                <a href="/hard"><button className='levelsButtons'>Hard</button></a>
                <a href="/complex"><button className='levelsButtons'>Complex</button></a>
            </section>
        </section>
        <Footer />
    </>);
}