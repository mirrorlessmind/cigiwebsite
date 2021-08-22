import React from "react";
import Reveal from "react-reveal/Reveal";

const About = () => {
  return (
    <>
      <div className="CIGI_tm_section" id="about">
        <div className="CIGI_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <Reveal effect="fadeInLeft">
                  <div className="image">
                    <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/about/1.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                </Reveal>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <Reveal effect="fadeInLeft">
                  <div className="cigi_title">
                    <span>About Me</span>
                    <h3>Creative Independent Web Developer </h3>
                  </div>
                  <div className="text">
                    <p>
                      Having a strong artistic background, and a thirst for knowledge, 
                      I have aquired a large warchest of skills. 
                      Utilizing over 10 years combined experience, from the advertising industry and being an entrepreneur, 
                      I understand the value of soft skills and backing it up with technical skills.
                      It may begin with creating assets 
                      with photography and videography and that then
                      evolve into your branded website. I enjoy every
                      step of the design process, from discussion and
                      collaboration.
                    </p>
                  </div>
                  <div className="cigi_button">
                    <a href="img/resume/CigiTiptonDeveloper.txt" download>
                      Download CV
                    </a>
                  </div>
                </Reveal>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default About;
