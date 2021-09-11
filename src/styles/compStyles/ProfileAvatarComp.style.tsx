/*
    src\styles\ProfileAvatarComp.style.tsx
        style for ProfileAvatarComp
    Author: AadilVarsh
    Github: https://github.com/AadilVarsh/
    Twitter: https://twitter.com/aadilvarsh
    Date: 10 September 2021
*/

// PACKAGE IMPORTS
import { makeStyles, createStyles, Theme } from "@material-ui/core";
// LOCAL IMPORTS

// CONSTANTS

// MAIN

const ProfileAvatarCompStyle = makeStyles((theme: Theme) => createStyles({
    avatarCon: {
        width: 'auto',
        height: 'auto'
    },
    avatar: {
        position: 'relative',
        display: 'block',
        border: "8px solid white",
        [theme.breakpoints.up(1280)]: {
            top: theme.spacing(-12),
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
        [theme.breakpoints.between(960, 1280)]: {
            top: theme.spacing(-10),
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
        [theme.breakpoints.between(600, 960)]: {
            top: theme.spacing(-10),
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
        [theme.breakpoints.between(0, 600)]: {
            top: theme.spacing(-10),
            width: theme.spacing(16),
            height: theme.spacing(16),
        }
    }
}))

export default ProfileAvatarCompStyle;