import React from "react";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/mirrorlessmind/",
  },
  { iconName: "github", link: "https://www.github.com/mirrorlessmind" },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/mirrorlessmind",
  },

];
const Social = () => {
  return (
    <div className="share">
      <span>Share:</span>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END social */}
    </div>
  );
};

export default Social;
