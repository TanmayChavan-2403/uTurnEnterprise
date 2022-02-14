import Banner from './components/scripts/banner.js';
import AboutUS from './components/scripts/aboutus.js';
import Services from './components/scripts/services.js';
import Review from './components/scripts/review.js';
import ContactUS from './components/scripts/contactus.js';
import Footer from './components/scripts/footer.js';
import ErrorBoundary from './components/scripts/errorHandler.js';

function Home(){
    return (
        <>
            <ErrorBoundary>
                <Banner />
                <AboutUS />
                <Services />
                <Review />
                <ContactUS />
                <Footer />
            </ErrorBoundary>
        </>
    )
}

export default Home;