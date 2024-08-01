import React from "react";
import Header from "../../components/Header";
import CardsFooter from "../../components/Footer/CardFooter";
import { useLocation } from "react-router-dom";
import SimpleFooter from "../../components/Footer/SimpleFooter";

const Home = () => {
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
      {/* <p>Hello Home</p> */}
      <div className="main-content" ref={mainContentRef}>
        <p>Hello</p>
      </div>
      {/* <CardsFooter /> */}
      <SimpleFooter />
    </>
  );
};

export default Home;
