import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from "react-router-dom";


import Navbar from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import AboutPage from "../pages/AboutPage"; 
import BlogPage from "../pages/BlogPage"; 
import DoctorPage from "../pages/DoctorPage"; 
import PricingPage from "../pages/PricinPage";
import DeparmentPage from "../pages/DeparmentPage";   
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import RegisterPageMed from "../pages/RegisterPageMed";
import ActivateAccountPage from "../pages/ActivateAccountPage";
import ForgotPassPage from "../pages/ForgotPassPage";

import CategoriesRouter from "./CategoriesRouter";


export default function AppRouter() {
  // window.localStorage.setItem('userId', 1)
  return (
    <Router>
     
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/doctor" component={DoctorPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/profile/:username" component={ProfilePage} />
        <Route exact path="/activate_account" component={ActivateAccountPage} />
        <Route exact path="/forgot_password" component={ForgotPassPage} />

        <Route exact path="/department" component={DeparmentPage} />
        <Route path="/pricing" component={PricingPage} />

        <Route exact path="/signin">
          <Redirect to="/login" />
        </Route>

        <PublicRoute exact path="/login" component={LoginPage} />
        <PublicRoute exact path="/register" component={RegisterPage} />
        <PublicRoute exact path="/register-medical" component={RegisterPageMed} />

        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <PrivateRoute exact path="/miprofile" component={ProfilePage}/>


        <Route path="/404" component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}


