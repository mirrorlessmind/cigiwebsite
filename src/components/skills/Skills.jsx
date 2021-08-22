import React from "react";

const Skills = () => {
  return (
    <>
      <div className="CIGI_tm_section">
        <div className="CIGI_tm_skills">
          <div className="container">
            <div className="skills_inner">
              <div className="left">
                <div className="cigi_title">
                  <h3>Always Learning New Skills</h3>
                </div>
                <div className="text">
                  <p>
                    Recently graduated an intense 6 month Full Mern Stack immersive bootcamp with a focus
                    on Agile Methodology.
                  </p>
                </div>
              </div>
              {/* End .left */}

              <div className="right">
                <div className="tokyo_progress">
                  <div className="progress_inner">
                    <span>
                      <span className="label">Web Development</span>
                     
                    </span>
                   
                    </div>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">Brand Identity</span>
                      <span className="number">80%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 80 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">Logo Design</span>
                      <span className="number">90%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 90 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}
                </div>
              </div>
              {/* End .right */}
            </div>
          </div>
          {/* End .container */}
        </div>
      </div>
    </>
  );
};

export default Skills;
