import { useLocation } from "react-router-dom";
import classNames from "classnames";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HashLinkObserver from "react-hash-link";

export interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): React.ReactElement => {

  let location = useLocation();
  let bgRounded = location.pathname !== "/";

  return (
    <div className={classNames({"main-layout":true, "rounded-bg":bgRounded})}>
      <Navbar />
      <HashLinkObserver />
      <div className="pt-20 md:pt-0">
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
