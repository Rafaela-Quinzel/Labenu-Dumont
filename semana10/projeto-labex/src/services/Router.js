import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../screens/public/home/HomePage'
import LoginPage from '../screens/private/login/LoginPage'
import ApplicationFormPage from '../screens/public/formPage/ApplicationFormPage'
import ListTripsPage from '../screens/private/createTrips/listTrips/ListTripsPage'
import TripDetailsPage from '../screens/private/tripDetail/TripDetailsPage'
import CreateTripPage from '../screens/public/trips/CreateTripPage'
import AboutPage from '../screens/aboutUS/AboutPage'
import ContactPage from '../screens/contact/ContactPage'

function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home">
               <HomePage />
            </Route>
            <Route exact path="/login">
               <LoginPage />
            </Route>
            <Route exact path="/inscreva-se">
               <ApplicationFormPage />
            </Route>
            <Route exact path="/viagens">
               <ListTripsPage />
            </Route>
            <Route exact path="/detalhes_das_viagens">
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
