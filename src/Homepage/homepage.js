import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./slider";
import Services from "./services";
import Header from "../header";
import BestPart from "./bestPart";
import GlobalReach from "./globalReach";
import WhyUs from "./whyUs";
import UserReviews from "./userReviews";
import Footer from "../footer";
import TrustedBy from './TrustedBy';
import Newsletter from './Newsletter';

function Homepage() {
  return (
    <>
    <Header />
    <Slider />
    <TrustedBy />
    <Services />
    <BestPart />
    {/* <GlobalReach /> */}
    <WhyUs />
    <Newsletter />
    {/* <UserReviews /> */}
    <Footer />
    
    </>
    
  );
}

export default Homepage;
