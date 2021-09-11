/*
    src\components\HeroComp.tsx
        Hero component
    Author: AadilVarsh
    Github: https://github.com/AadilVarsh/website
    Twitter: https://twitter.com/aadilvarsh
    Date: 11 September 2021
*/

// PACKAGE IMPORTS
import React, { useEffect, useState } from "react";

import { Grid, Typography } from "@material-ui/core";
import Typewriter from "typewriter-effect";

import HelloList from './../util/hello.json'

// LOCAL IMPORTS

import HeroCompStyle from "../styles/compStyles/HeroComp.style";

// CONSTANTS

// MAIN

const RunningHeader = () => {

    const style = HeroCompStyle();
    return (
        <Grid item container justifyContent="center" alignItems="center">
            <Typography variant="h1" className={style.headerText}>
                <Typewriter
                    options={{
                        strings: HelloList,
                        autoStart: true,
                        loop: true,
                        cursor: "! 👋🏻",
                    }}
                />
            </Typography>
        </Grid>
    )

}

const HeroContent = () => {

    const style = HeroCompStyle();

    return (
        <>
            <Grid item container justifyContent="center" alignItems="center" className={style.heroTextCon}>
                <Typography variant="h4" className={style.heroText}>
                    Farm STACK dev👨🏻‍🌾
                </Typography>
            </Grid>

            <Grid item container justifyContent="center" alignItems="center" className={style.heroTextCon}>
                <Typography variant="h4" className={style.heroText}>
                    TypeScript lover (💙.ts)
                </Typography>
            </Grid>
            <Grid item container justifyContent="center" alignItems="center" className={style.heroTextCon}>
                <Typography variant="h4" className={style.heroText2}>
                    Snek 🐍
                </Typography>
            </Grid>

        </>
    )

}

const HeroComp = () => {

    const style = HeroCompStyle();
    return (
        <React.Fragment>
            <Grid
                item
                container
                justifyContent="center"
                alignContent="flex-start"
                className={style.cont}
            >
                <RunningHeader />
                <HeroContent />
            </Grid>
        </React.Fragment>
    );
};

export default HeroComp;
