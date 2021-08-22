import React from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="cigi_all_wrap">
      <ScrollToTop />
      <Routes />
    </div>
  );
};

export default App;
