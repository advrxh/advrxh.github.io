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

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// LOCAL IMPORTS
import AppStyle from "./styles/AppStyle";

import HomePageComp from "./components/homePageComp";
import FindMePage from "./components/findmePage";

// MAIN

function App() {

  const style = AppStyle();

  return (
    <Router >
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePageComp} />
          <Route exact path="/findme" component={FindMePage} />
          <Route exact path="/links" component={FindMePage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
