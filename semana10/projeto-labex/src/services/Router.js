import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../screens/home/HomePage'
import LoginPage from '../screens/login/LoginPage'
import ApplicationFormPage from '../screens/formPage/ApplicationFormPage'
import ListTripsPage from '../screens/trips/ListTripsPage'
import TripDetailsPage from '../screens/trips/TripDetailsPage'
import CreateTripPage from '../screens/trips/CreateTripPage'
import AboutPage from '../screens/aboutUS/AboutPage'
import ContactPage from '../screens/contact/ContactPage'

function Router() {
  return (
    <BrowserRouter>
        <Switch>
      {/* <Route exact path="/sobre/:linguagem"> */}
            <Route exact path="/login">
               <LoginPage />
            <Route exact path="/">
               <HomePage />
            </Route>
            </Route>
            <Route exact path="/inscreva-se">
               <ApplicationFormPage />
            </Route>
            <Route exact path="/viagens">
               <ListTripsPage />
            </Route>
            <Route exact path="/detalhes_da_viagem">
               <TripDetailsPage />
            </Route>
            <Route exact path="/viagens">
               <ListTripsPage />
            </Route>
            <Route exact path="/criar_viagens">
               <CreateTripPage />
            </Route>
            <Route exact path="/sobre">
               <AboutPage />
            </Route>
            <Route exact path="/contato">
               <ContactPage />
            </Route>
            <Route>
               <HomePage />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}
export default Router;
