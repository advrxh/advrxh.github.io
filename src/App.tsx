/*
  src\App.tsx
    main App.tsx for varsh-web
  Author: AadilVarsh
  Github: https://github.com/AadilVarsh/website
  Twitter: https://twitter.com/aadilvarsh
  Date: 10 September 2021
*/

// PACKAGE IMPORTS
import React from "react";
import { Grid } from '@material-ui/core'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// LOCAL IMPORTS
import AppStyle from "./styles/AppStyle";

import Banner from "./components/bannerComp";
import ProfileAvatarComp from "./components/ProfileAvatarComp";
import HeroComp from "./components/HeroComp";
import FooterComp from "./components/FooterComp";

import FindMePage from "./components/findmePage";

// MAIN

function App() {

  const style = AppStyle();

  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Grid container className={style.root}>
              <Grid container item justifyContent="center" alignContent="flex-start">
                <Banner />
                <ProfileAvatarComp />
                <HeroComp />
                <FooterComp footerNavText="/findme" footerNavPath="/findme" />
              </Grid>
            </Grid>
          </Route>
          <Route exact path="/findme">
            <FindMePage />
          </Route>
          <Route exact path="/links">
            <FindMePage />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
