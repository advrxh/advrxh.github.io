/*
    src\components\bannerComp.tsx
        HomePage Banner
    Author: AadilVarsh
    Github: https://github.com/AadilVarsh/
    Twitter: https://twitter.com/aadilvarsh
    Date: 10 September 2021
*/

// PACKAGE IMPORTS
import React from 'react';
import { Grid, Typography } from '@material-ui/core'

// LOCAL IMPORTS

import bannerCompStyle from '../styles/compStyles/bannerComp.style'

// MAIN

function Banner() {

    const style = bannerCompStyle();

    return (
        <React.Fragment>
            <Grid item container
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                justifyContent="center"
                alignItems="center"
                direction="column"
                className={style.bannerCont}
            >
                <Typography variant="h1" className={style.nameHeader} >aadilvarsh</Typography>
                <Typography variant="h4" className={style.tagline}>A basic <strong>JACK</strong> of all trades.</Typography>

            </Grid>
        </React.Fragment>
    );
}

export default Banner;