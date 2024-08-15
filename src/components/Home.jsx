
import Banner from '../shared/Banner';
import About from './About';

const Home = () => {
    return(
        <>
        <div className="mx-auto" id='home'>
            <Banner welcome="Welcome to" heading="Batara Motor" subheading="One Stop Service" btn={"Get Started"} />
            <About/>
        </div>
        </>
    );
};

export default Home;