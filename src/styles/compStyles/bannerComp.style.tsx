/*
    src\styles\bannerComp.style.tsx
        styling for src/components/bannerComp.tsx
    Author: AadilVarsh
    Github: https://github.com/AadilVarsh/
    Twitter: https://twitter.com/aadilvarsh
    Date: 10 September 2021
*/

// PACKAGE IMPORTS

import { makeStyles, Theme, createStyles } from "@material-ui/core";

// LOCAL IMPORTS

// MAIN

const bannerCompStyle = makeStyles((theme: Theme) => createStyles({

    bannerCont: {
        position: 'relative',
        overflow: 'hidden',
        height: '40vh',
        background: `${theme.palette.primary.main} no-repeat center`,
        backgroundSize: 'cover',
        borderBottom: "8px solid white",
        borderTop: "8px solid white",
    },
    nameHeader: {
        color: theme.palette.secondary.main,
        fontWeight: 450,
        position: 'relative',
        display: 'block',
        top: theme.spacing(-4),
        [theme.breakpoints.up(1280)]: {
            fontSize: theme.typography.fontSize + 100
        },
        [theme.breakpoints.between(960, 1280)]: {
            fontSize: theme.typography.fontSize + 80
        },
        [theme.breakpoints.between(600, 960)]: {
            fontSize: theme.typography.fontSize + 60
        },
        [theme.breakpoints.between(0, 600)]: {
            fontSize: theme.typography.fontSize + 40
        }
    },
    tagline: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'block',
        top: theme.spacing(-4),
        [theme.breakpoints.up(1280)]: {
            fontSize: theme.typography.fontSize + 20
        },
        [theme.breakpoints.between(960, 1280)]: {
            fontSize: theme.typography.fontSize + 15
        },
        [theme.breakpoints.between(600, 960)]: {
            fontSize: theme.typography.fontSize + 10
        },
        [theme.breakpoints.between(0, 600)]: {
            fontSize: theme.typography.fontSize + 5
        }
    },


}));

export default bannerCompStyle;
