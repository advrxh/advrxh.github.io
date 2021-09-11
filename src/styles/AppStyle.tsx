/*
    src\App.style.tsx
        Styling for src/App.txt
    Author: AadilVarsh
    Github: https://github.com/AadilVarsh/website
    Twitter: https://twitter.com/aadilvarsh
    Date: 10 September 2021
*/

// PACKAGE IMPORTS

import { makeStyles, Theme, createStyles } from '@material-ui/core'

// MAIN

const AppStyle = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '100vh',
        backgroundColor: theme.palette.secondary.dark
    }
}))

export default AppStyle;
