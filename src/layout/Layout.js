import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import "./style.css";

const Layout = (props) => {
  const location = useLocation();
  const mainContentRef = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, [location]);
  return (
    <>
      <Header />
      <div className="main-content px-5" ref={mainContentRef}>
        {props.children()}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
