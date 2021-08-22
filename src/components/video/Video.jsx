import React, { useState } from "react";
import ModalVideo from "react-modal-video";

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
                process.env.PUBLIC_URL + "img/video/1.jpg"
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

          <h3 className="text">
            Delivering beautiful digital products for my clients.
          </h3>

          <div className="cigi_video_button">
            <button className="popup-youtube" onClick={() => setOpen(true)}>
              Watch Video
            </button>
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
