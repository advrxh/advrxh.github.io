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

// LOCAL IMPORTS
import AppStyle from "./styles/AppStyle";

import Banner from "./components/bannerComp";
import ProfileAvatarComp from "./components/ProfileAvatarComp";
import HeroComp from "./components/HeroComp";
import FooterComp from "./components/FooterComp";
// MAIN

function App() {

  const style = AppStyle();

  return (
    <React.Fragment>
      <Grid container className={style.root}>
        <Grid container item justifyContent="center" alignContent="flex-start">
          <Banner />
          <ProfileAvatarComp />
          <HeroComp />
          <FooterComp />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
