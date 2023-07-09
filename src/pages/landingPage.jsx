import Card from "../components/card/Card";
import HomePage from "../layout/Home/HomePage";
import Navigation from "../layout/Navigation/Navigation";
import "./landingPage.css";

const Landingpage = () => {
  return (
    <>
      <div className="Container-landing-page">
        <Navigation />
        <div className="Wrapper-landing-page">
          <div className="Child-landing-page-HomePage">
            <HomePage />
          </div>
          <div className="Child-landing-page-Card">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
