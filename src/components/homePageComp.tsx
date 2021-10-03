// PACKAGE IMPORTS
import { Grid } from '@material-ui/core'
// LOCAL IMPORTS

import Banner from './bannerComp'
import ProfileAvatarComp from './ProfileAvatarComp'
import HeroComp from './HeroComp'
import FooterComp from './FooterComp'


import AppStyle from '../styles/AppStyle'

// CONSTANTS

// MAIN

const HomePageComp = () => {
    const style = AppStyle();
    return (
        <Grid container className={style.root}>
            <Grid container item justifyContent="center" alignContent="flex-start">
                <Banner />
                <ProfileAvatarComp />
                <HeroComp />
                <FooterComp footerNavText="/findme" footerNavPath="#findme" />
            </Grid>
        </Grid>

    )
}

export default HomePageComp