/*
    src\styles\compStyles\FooterComp.style.tsx
        
    Author: AadilVarsh
    Github: https://github.com/AadilVarsh/website
    Twitter: https://twitter.com/aadilvarsh
    Date: 11 September 2021
*/

// PACKAGE IMPORTS

import { makeStyles, Theme, createStyles } from '@material-ui/core'

// LOCAL IMPORTS

// CONSTANTS

// MAIN

const FooterCompStyle = makeStyles((theme: Theme) => createStyles({

    footerCont: {
        position: 'fixed',
        bottom: 0 + theme.spacing(6),
        cursor: 'pointer',
    },
    footerText: {
        color: theme.palette.primary.light,
        [theme.breakpoints.up(1280)]: {
            fontSize: theme.typography.fontSize + 5
        },
        [theme.breakpoints.between(960, 1280)]: {
            fontSize: theme.typography.fontSize + 5
        },
        [theme.breakpoints.between(600, 960)]: {
            fontSize: theme.typography.fontSize + 3
        },
        [theme.breakpoints.between(0, 600)]: {
            fontSize: theme.typography.fontSize - 3
        }

    },
    footerText2: {
        color: theme.palette.common.white
    },
    footerCont2: {
        position: 'fixed',
        bottom: 0 + theme.spacing(2),
        cursor: 'pointer',
    }


}))

export default FooterCompStyle;