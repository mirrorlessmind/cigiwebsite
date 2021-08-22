import React from "react";

const Footer = () => {
  return (
    <>
      <div className="CIGI_tm_section">
        <div className="CIGI_tm_copyright">
          <div className="container">
            <div className="inner">
              <p>
                &copy; {new Date().getFullYear()} by{" "}
                
                  Code Tipton
                
                . All rights reserved.
              </p>
            </div>
            {/* End inner */}
          </div>
        </div>
        {/* End CIGI_tm_copyright */}
      </div>
    </>
  );
};

export default Footer;
