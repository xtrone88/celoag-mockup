import { Route, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Career from "./Career";
import CareerPart from "./CareerPart";

const Pages = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/career" component={Career}/>
        <Route exact path="/careerpart" component={CareerPart}/>
      </Switch>
    </MainLayout>
  );
};

export default Pages;
