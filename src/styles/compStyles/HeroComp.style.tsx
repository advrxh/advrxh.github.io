/*
    src\styles\compStyles\HeroComp.style.tsx
        styles for HeroComp.tsx
    Author: AadilVarsh
    Github: https://github.com/AadilVarsh/
    Twitter: https://twitter.com/aadilvarsh
    Date: 11 September 2021
*/

// PACKAGE IMPORTS
import { makeStyles, createStyles, Theme } from '@material-ui/core'
// LOCAL IMPORTS

// CONSTANTS

// MAIN

const HeroCompStyle = makeStyles((theme: Theme) => createStyles({
    cont: {
        position: 'relative',
        top: theme.spacing(-10),
        // backgroundColor: 'red'
    },
    headerText: {
        color: theme.palette.primary.main,
        marginTop: theme.spacing(2),
        position: 'relative',
        display: 'block',
        left: theme.spacing(-.25),
        [theme.breakpoints.up(1280)]: {
            fontSize: theme.typography.fontSize + 40,
            marginTop: theme.spacing(-1)
        },
        [theme.breakpoints.between(960, 1280)]: {
            fontSize: theme.typography.fontSize + 35,
            marginTop: theme.spacing(-1)
        },
        [theme.breakpoints.between(600, 960)]: {
            fontSize: theme.typography.fontSize + 30
        },
        [theme.breakpoints.between(0, 600)]: {
            fontSize: theme.typography.fontSize + 20
        },
    },
    heroTextCon: {
        textAlign: 'center',
        cursor: 'pointer',
        margin: theme.spacing()
    },
    heroText: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'block',
        top: theme.spacing(),
        fontWeight: 450,
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
            fontSize: theme.typography.fontSize + 10
        }
    },
    heroText2: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'block',
        top: theme.spacing(),
        fontWeight: 450,
        [theme.breakpoints.up(1280)]: {
            fontSize: theme.typography.fontSize + 25
        },
        [theme.breakpoints.between(960, 1280)]: {
            fontSize: theme.typography.fontSize + 20
        },
        [theme.breakpoints.between(600, 960)]: {
            fontSize: theme.typography.fontSize + 15
        },
        [theme.breakpoints.between(0, 600)]: {
            fontSize: theme.typography.fontSize + 15
        }

    }


}))

export default HeroCompStyle;
