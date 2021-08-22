import React from "react";

const AboutFour = () => {
  return (
    <>
      <div className="CIGI_tm_section" id="about">
        <div className="CIGI_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div className="image">
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/about/4.jpg"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div className="cigi_title">
                  <span>About Me</span>
                  <h3>Creative Independent Web Developer based in Dallas, Texas</h3>
                </div>
                <div className="text">
                  <p>
                    As a web designer, and I'm very passionate and dedicated to
                    my work. With 20 years experience as a professional web
                    developer, I have acquired the skills and knowledge
                    necessary to make your project a success. I enjoy every step
                    of the design process, from discussion and collaboration.
                  </p>
                </div>
                <div className="cigi_button">
                  <a href="img/resume/CigiTiptonDeveloper.txt" download>
                    Download CV
                  </a>
                </div>
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

export default AboutFour;
