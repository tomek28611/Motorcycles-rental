import { HiMenuAlt3 } from 'react-icons/hi';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ImageSlider from "./components/Slider";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Slider from "./components/Slider2";



function App() {

  const handleClickScroll = (e) => {
    const element = document.getElementById('section-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={handleClickScroll} className="">
 
      <Hero />
      <Services />
      <ImageSlider />
      <div id="section-1">
        <Booking onClick={handleClickScroll} />
      </div>
      <Reviews />
      <Footer />

    </div>
  );
}

export default App;
