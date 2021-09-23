import React, { lazy } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from './theme/globalStyles';
import ScrollToTop from "./components/ScrollToTop";


const Home = lazy(async () => await import('./pages/Home'))
const Partners = lazy(async () => await import('./pages/Partners'))
const Record = lazy(async () => await import('./pages/Record'))
const Agenda = lazy(async () => await import('./pages/Agenda'))

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/partners/:name" component={Record} />
        <Route exact path="/agenda" component={Agenda} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
