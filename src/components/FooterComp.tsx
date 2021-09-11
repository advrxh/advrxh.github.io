/*
    src\components\FooterComp.tsx
        footer for main page
    Author: AadilVarsh
    Github: https://github.com/AadilVarsh/
    Twitter: https://twitter.com/aadilvarsh
    Date: 11 September 2021
*/

// PACKAGE IMPORTS
import { Grid, Link, Typography } from '@material-ui/core'
// LOCAL IMPORTS
import FooterCompStyle from './../styles/compStyles/FooterComp.style'

// CONSTANTS

// MAIN

const FooterComp = () => {
    const style = FooterCompStyle();
    return (<>
        <Grid item container justifyContent="center" alignContent="flex-start" className={style.footerCont}
            xl={4}
            lg={4}
            md={6}
            sm={8}
            xs={10}
        >
            <Typography variant="subtitle1" className={style.footerText}  >Programmer | Art Admirer | Aspiring FilmMaker</Typography>
        </Grid>
        <Grid item container justifyContent="center" alignContent="flex-start" className={style.footerCont2}>
            <Link href="https://github.com/AadilVarsh/website" target="_blank">
                <Typography variant="subtitle2" className={style.footerText2}>Made with ♥ and React</Typography>
            </Link>
        </Grid>


    </>)
}

export default FooterComp;