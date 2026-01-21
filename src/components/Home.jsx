import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutCopy from "../components/AboutCopy";
import Contacts from "../components/Contacts";
import GoogleReviewsWidget from "../components/GoogleReviewsWidget";
const Home = () => {
  return (
    <>
<section id="home"><Hero /></section>
<section id="services"><Services /></section>
<section id="about"><AboutCopy /></section>
{/* <section id="bewertungen"><GoogleReviewsWidget /></section> */}

<section id="contacts"><Contacts /></section>
    </>
  );
};

export default Home;
