import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../screens/public/home/HomePage'
import AdmLoginPage from '../screens/private/login/AdmLoginPage'
import ApplicationFormPage from '../screens/public/formPage/ApplicationFormPage'
import ListTripsPage from '../screens/public/trips/ListTripsPage'
import AdmListTrips from '../screens/private/listTrips/AdmListTrips'
import AdmTripDetailsPage from '../screens/private/tripDetail/AdmTripDetailsPage'
import AdmCreateTripPage from '../screens/private/createTrips/AdmCreateTripPage'
import AboutPage from '../screens/public/aboutUS/AboutPage'
import ContactPage from '../screens/public/contact/ContactPage'

function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home">
               <HomePage />
            </Route>
            <Route exact path="/login">
               <AdmLoginPage />
            </Route>
            <Route exact path="/inscreva-se/:id/apply">
               <ApplicationFormPage />
            </Route>
            <Route exact path="/viagens">
               <ListTripsPage />
            </Route>
            <Route exact path="/viagens_adm">
               <AdmListTrips />
            </Route>
            <Route exact path="/detalhes_da_viagem/:id">
               <AdmTripDetailsPage />
            </Route>
            <Route exact path="/criar_viagens">
               <AdmCreateTripPage />
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
