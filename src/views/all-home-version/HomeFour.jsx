import React from 'react';
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderFour";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/PortfolioTwo";
import Skills from "../../components/skills/SkillsTwo";
import Video from "../../components/video/VideoTwo";
import Brand from "../../components/Brand";
import Testimonial from "../../components/testimonial/TestimonialTwo";
import News from "../../components/news/NewsTwo";
import CallToAction from "../../components/calltoactions/CallToActionTwo";
import Footer from "../../components/footer/Footer";


const HomeTwo = () => {
  return (
    <div className="home-four">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Portfolio />
      {/* End Portfolio Section */}

      <Video />
      {/* End Video Section */}

      <CallToAction />
      {/* End CallToAction */}

      <Footer />
      {/* End Footer Section */}
    </div>
  );
};

export default HomeTwo;
