import './App.css';
import Banner from './components/scripts/banner.js';
import AboutUS from './components/scripts/aboutus.js';
import Services from './components/scripts/services.js';
import Review from './components/scripts/review.js'
import ContactUS from './components/scripts/contactus.js';
import Footer from './components/scripts/footer.js'

function App(){
    return (
        <>
            <Banner />
            <AboutUS />
            <Services />
            <Review />
            <ContactUS />
            <Footer />
        </>
    )
}

export default App;
