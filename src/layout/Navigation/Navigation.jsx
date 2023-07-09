import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import { AiFillGithub } from "react-icons/ai";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="Container">
        <div className="Wrapper-Logo">
          <Logo />
        </div>
        <div className="Wrapper-Nav">
          <Navbar label="Home" />
          <Navbar label="About" />
          <Navbar label="TechStack" />
          <Navbar label="Project" />
          <AiFillGithub />
        </div>
      </div>
    </>
  );
};

export default Navigation;
