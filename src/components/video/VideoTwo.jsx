import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Reveal from "react-reveal/Reveal";

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="CIGI_tm_section">
      <div className="cigi_business_video">
        <div className="bg">
          <div
            className="image jarallax"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/video/mmsvideo.png"
              })`,
            }}
          ></div>
          <div className="overlay"></div>
        </div>
        {/* End .bg */}

        <div className="content">
          <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen}
            videoId="589170275?"
            onClose={() => setOpen(false)}
          />

          <span className="rounded" onClick={() => setOpen(true)}></span>
          <Reveal effect="fadeInUp">
            <h3 className="text">
              A sample promo video.
            </h3>
          </Reveal>
          <div className="cigi_video_button">
            <Reveal effect="fadeInUp">
              <button className="popup-youtube" onClick={() => setOpen(true)}>
                Watch Video
              </button>
            </Reveal>
          </div>
        </div>
        {/* End .content */}
      </div>
      {/* End .cigi_business_video */}
    </div>
    // End .CIGI_tm_section
  );
};

export default Video;
