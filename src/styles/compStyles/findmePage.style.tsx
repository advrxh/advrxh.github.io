// PACKAGE IMPORTS

import { createStyles, makeStyles, Theme } from "@material-ui/core";

// LOCAL IMPORTS
// CONSTANTS

// MAIN

const FindMePageStyle = makeStyles((theme: Theme) =>
    createStyles({
        PageCont: {
            width: "100vw",
            height: "100vh",
            background: theme.palette.secondary.main,
        },
        icon: {
            fontSize: theme.typography.fontSize + 40,
        },
        routeCont: {
            width: "auto",
            height: "auto",
        },
    })
);

export default FindMePageStyle;
